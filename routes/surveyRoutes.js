const _ = require('lodash');
const { Path } = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const requireCredits = require('../middlewares/requireCredits');
const requireLogin = require('../middlewares/requireLogin');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');

module.exports = (app) => {
  app.post(
    '/api/surveys/new',
    requireLogin,
    requireCredits,
    async (req, res) => {
      const { title, subject, body, recipients } = req.body;
      const survey = new Survey({
        title,
        subject,
        body,
        recipients: recipients
          .split(',')
          .map((recipient) => ({ email: recipient })),
        _user: req.user.id,
        date: Date.now(),
      });

      const mailer = new Mailer(survey, surveyTemplate(survey));

      try {
        await mailer.send();
        await survey.save();
        req.user.credits -= 1;
        const user = await req.user.save();

        res.send(user);
      } catch (err) {
        res.status(422).send(err);
      }
    }
  );

  app.post('/api/surveys/webhooks', async (req, res) => {
    const p = new Path('/api/surveys/:surveyid/:choice');
    const updates = [];
    const event = _.chain(req.body)
      .map(({ email, url }) => {
        const path = new URL(url).pathname;
        const pathInfo = p.test(path);
        if (pathInfo)
          return {
            email,
            surveyId: pathInfo.surveyid,
            choice: pathInfo.choice,
          };
      })
      .compact()
      .uniqBy('email', 'surveyId')
      .each(({ surveyId, email, choice }) => {
        // Construir las actualizaciones pero no ejecutarlas todavía
        updates.push({
          updateOne: {
            filter: {
              _id: surveyId,
              recipients: { $elemMatch: { email: email, voted: false } },
            },
            update: {
              $inc: { [choice]: 1 },
              $set: { 'recipients.$.voted': true },
              lastResponded: new Date(),
            },
          },
        });
      })
      .value();

    try {
      // Ejecutar todas las actualizaciones en una sola operación
      const respond = await Survey.bulkWrite(updates);
      console.log(respond);
      res.send({});
    } catch (error) {
      res
        .status(500)
        .send('Error al procesar las respuestas de las encuestas.');
    }
  });

  app.get('/api/surveys', async (req, res) => {
    try {
      res.send(
        await Survey.find({_user : req.user.id}).select({ recipients: false })
      );
    } catch (error) {
      res.status(500).send(`Error: ${error}`);
    }
  });

  app.get('/api/surveys/:surveiId/:choice', (req, res) => {
    res.send('Thanks for voting!!!');
  });
};

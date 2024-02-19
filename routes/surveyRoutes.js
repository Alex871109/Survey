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
      console.log(req.body);
      console.log(title);
      console.log(subject);
      console.log(recipients);
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

  app.get('/api/surveys/thanks', (req, res) => {
    res.send('Thanks for voting!!!');
  });
};

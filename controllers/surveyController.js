const _ = require('lodash');
const { Path } = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const asyncHandler = require('../middlewares/asyncHandler');

const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');

const createSendSurvey = asyncHandler(async (req, res) => {
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

  await mailer.send();
  await survey.save();
  req.user.credits -= 1;
  const user = await req.user.save();
  res.send(user);
});

const addCredits = asyncHandler(async (req, res) => {
  req.user.credits += req.body.credits;
  const user = await req.user.save();
  res.send(user);
});

const deleteSurvey = asyncHandler(async (req, res) => {
  const surveyEliminada = await Survey.findByIdAndDelete(req.params.id);
  if (!surveyEliminada) {
    res.status(404);
    throw new Error('Survey not found');
  }
  res.json({ mensaje: 'Survey was deleted ', survey: surveyEliminada });
});

const sendgridFeedback = asyncHandler(async (req, res) => {
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

  // Ejecutar todas las actualizaciones en una sola operación
  const respond = await Survey.bulkWrite(updates);
  if (!respond) {
    res.status(404);
    throw new Error('Error processing the replies');
  }
  res.send({});
});

const getSurveysByUser = asyncHandler(async (req, res) => {
  res.send(
    await Survey.find({ _user: req.user.id }).select({ recipients: false })
  );
});

module.exports = { createSendSurvey, deleteSurvey, sendgridFeedback, getSurveysByUser };

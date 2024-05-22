const requireCredits = require('../middlewares/requireCredits');
const requireLogin = require('../middlewares/requireLogin');
const {
  createSendSurvey,
  deleteSurvey,
  sendgridFeedback,
  getSurveysByUser,
} = require('../controllers/surveyController');
const { analyzeFeedback } = require('../controllers/aiInterfaceController');

module.exports = (app) => {
  app.post('/api/surveys/new', requireLogin, requireCredits, createSendSurvey);

  app.delete('/api/surveys/delete/:id', requireLogin, deleteSurvey);

  app.post('/api/surveys/webhooks', sendgridFeedback);

  app.get('/api/surveys', requireLogin, getSurveysByUser);

    //Add require logging after developing face
  app.post('/api/surveys/feedback_analisis', analyzeFeedback);

  app.get('/api/surveys/:surveiId/:choice', (req, res) => {
    res.send('Thanks for voting!!!');
  });
};

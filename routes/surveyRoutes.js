const requireCredits = require('../middlewares/requireCredits');
const requireLogin = require('../middlewares/requireLogin');
const {
  createSendSurvey,
  deleteSurvey,
  sendgridFeedback,
  getSurveysByUser,
} = require('../controllers/surveyController');

module.exports = (app) => {
  
  app.post('/api/surveys/new', requireLogin, requireCredits, createSendSurvey);

  app.delete('/api/surveys/delete/:id', requireLogin, deleteSurvey);

  app.post('/api/surveys/webhooks', sendgridFeedback);

  app.get('/api/surveys', requireLogin, getSurveysByUser);

  app.get('/api/surveys/:surveiId/:choice', (req, res) => {
    res.send('Thanks for voting!!!');
  });
};

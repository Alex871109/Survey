const requireLogin = require('../middlewares/requireLogin');
const { paymentInt, addCredits } = require('../controllers/billController');

module.exports = (app) => {
  app.post('/bill/create-payment-intent', requireLogin, paymentInt);

  app.post('/api/add_credits', requireLogin, addCredits);
};

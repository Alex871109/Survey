const requireLogin = require('../middlewares/requireLogin');
const asyncHandler = require('../middlewares/asyncHandler');

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2022-08-01',
});

module.exports = (app) => {
  app.post(
    '/bill/create-payment-intent',
    requireLogin,
    asyncHandler(async (req, res) => {

      const paymentIntent = await stripe.paymentIntents.create({
        currency: 'EUR',
        amount: 500,
        description: '5 EUR por 5 creditos',
        automatic_payment_methods: {
          enabled: true,
        },
      });

      if (paymentIntent) {
        //Send publishable key and PaymentIntent details to client
        res.send({
          clientSecret: paymentIntent.client_secret,
        });
      }
    })
  );

  app.post(
    '/api/add_credits',
    asyncHandler(async (req, res) => {
      req.user.credits += req.body.credits;
      const user = await req.user.save();
      res.send(user);
    
    })
  );
};

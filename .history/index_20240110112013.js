const express = require('express');
const passport = require('passport');
const keys = require('./config/keys');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: 'auth/google/callback',
    },
    (accessToken) => {
      console.log(accessToken);
    }
  )
);

app.get(
  '/auth/google',
  passport.use('google', {
    scope: ['profile', 'email'],
  })
);

const port = process.env.PORT || 5000;



app.get('/', (req, res) => {
  res.send('hello from simple server :-)');
});

app.listen(port, () =>
  console.log('> Server is up and running on port : ' + port)
);

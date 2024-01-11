const express = require('express');
const passport = require('passport');
const keys = require('./config/keys');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

const port = process.env.PORT || 5000;
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
    },
    (accessToken,profile) => {
      console.log(accessToken);
      console.log(profile);
    }
  )
);

app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

app.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

app.get('/', (req, res) => {
  res.send('hello from simple server :-)');
});

app.listen(port, () =>
  console.log('> Server is up and running on port : ' + port)
);

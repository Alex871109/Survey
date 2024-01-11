module.
const passport = require('passport');
const keys = require('./config/keys');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(
    new GoogleStrategy(
      {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
      },
      (accessToken,refreshToken, profile) => {
        console.log('accesstoken:',accessToken);
        console.log('profile:',profile);
      }
    )
  );
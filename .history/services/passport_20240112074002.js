const passport = require('passport');
const keys = require('../config/keys');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');

const user = mongoose.model('users');
passport.
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      user.findOne(({googleId : profile.id})).then((existingUser) => {
        if (existingUser) {
          done(null, existingUser);
        } else {
          new user({googleId : profile.id}).save().then((user)=>
            done(null,user)
          );
        }
      });
    }
  )
);

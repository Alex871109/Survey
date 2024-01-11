const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require(c)
const app = express();

passport.use(new GoogleStrategy());

const port = process.env.PORT || 5000;

//
//secretKey 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

app.get('/', (req, res) => {
  res.send('hello from simple server :-)');
});

app.listen(port, () =>
  console.log('> Server is up and running on port : ' + port)
);

const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./models/User');
require('./services/passport');

mongoose.connect(process.env.MONGO_URI);

const app = express();

const { resolve } = require('path');

if (process.env.NODE_ENV === 'production') {
  aapp.use(express.static('client/build'));

  app.get('*', (req, res) => {
    const path = resolve('client', 'build', 'index.html');
    res.sendFile(path);
  });
}

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY],
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./routes/authRoutes')(app);
require('./routes/billRoutes')(app);

const port = process.env.PORT;
app.listen(port, () =>
  console.log('> Server is up and running on port : ' + port)
);

// mongodb user gptatwork  // pass 0miEqCVDQNm0m91r

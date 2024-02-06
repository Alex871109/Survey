const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./models/User');
require('./models/Survey');
require('./services/passport');


mongoose.connect(process.env.MONGO_URI);

const app = express();
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
require('./routes/surveyRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT;
app.listen(port, () =>
  console.log('> Server is up and running on port : ' + port)
);

// mongodb user gptatwork  // pass 0miEqCVDQNm0m91r

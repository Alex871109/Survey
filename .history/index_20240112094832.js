const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();
app.use(cookieSession({
  maxAge: 30*24*60+60*1000,
  k
}))

require('./routes/authRoutes')(app);

app.get('/', (req, res) => {
  res.send('hello from simple server :-)');
});

const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log('> Server is up and running on port : ' + port)
);

// mongodb user gptatwork  // pass 0miEqCVDQNm0m91r

const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');se
require('./services/passport');
require('')
mongoose.connect(keys.mongoURI);

const app = express();

require('./routes/authRoutes')(app);

app.get('/', (req, res) => {
  res.send('hello from simple server :-)');
});

const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log('> Server is up and running on port : ' + port)
);

// mongodb user gptatwork  // pass 0miEqCVDQNm0m91r

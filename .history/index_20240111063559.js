const express = require('express');
const authroutes= require('./routes')
require ('./services/passport')

const app = express();







app.get('/', (req, res) => {
  res.send('hello from simple server :-)');
});

const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log('> Server is up and running on port : ' + port)
);

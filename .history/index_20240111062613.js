const express = require('express');


const app = express();

const port = process.env.PORT || 5000;

re



app.get('/', (req, res) => {
  res.send('hello from simple server :-)');
});

app.listen(port, () =>
  console.log('> Server is up and running on port : ' + port)
);

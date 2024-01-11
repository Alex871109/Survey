const express = require('express');
const app = express();

const port = process.env.PORT || 5000;


//clientID 942575444703-63n3ugk5u4dk3dk0okoemdik37fa7n5q.apps.googleusercontent.com
//secretKey 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

app.get('/', (req, res) => {
  res.send('hello from simple server :-)');
});

app.listen(port, () =>
  console.log('> Server is up and running on port : ' + port)
);

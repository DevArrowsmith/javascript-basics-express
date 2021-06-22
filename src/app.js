const express = require('express');
const strings = require('./lib/strings');

const app = express();

app.get('/strings/hello/:entity', (req, res) => {
  res.status(200).json({ result: strings.sayHello(req.params.entity) });
});

module.exports = app;

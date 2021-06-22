const express = require('express');

const app = express();

app.get('/strings/hello/:entity', (req, res) => {
  res.status(200).json({ result: `Hello, ${req.params.entity}!` });
});

module.exports = app;

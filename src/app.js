const express = require('express');
const strings = require('./lib/strings');
const numbers = require('./lib/numbers');

const app = express();
app.use(express.json());

app.get('/strings/hello/:string', (req, res) => {
  res.status(200).json({ result: strings.sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
  res.status(200).json({ result: strings.uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
  res.status(200).json({ result: strings.lowercase(req.params.string) });
});

app.get('/strings/first-characters/:string', (req, res) => {
  if (req.query.length) {
    res.status(200).json({ result: strings.firstCharacters(req.params.string, req.query.length) });
  } else {
    res.status(200).json({ result: strings.firstCharacter(req.params.string) });
  }
});

app.get('/numbers/add/:firstNumber/and/:secondNumber', (req, res) => {
  if (
    Number.isNaN(Number(req.params.firstNumber)) ||
    Number.isNaN(Number(req.params.secondNumber))
  ) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({
      result: numbers.add(Number(req.params.firstNumber), Number(req.params.secondNumber)),
    });
  }
});

app.get('/numbers/subtract/:firstNumber/from/:secondNumber', (req, res) => {
  if (
    Number.isNaN(Number(req.params.firstNumber)) ||
    Number.isNaN(Number(req.params.secondNumber))
  ) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({
      result: numbers.subtract(Number(req.params.secondNumber), Number(req.params.firstNumber)),
    });
  }
});

module.exports = app;

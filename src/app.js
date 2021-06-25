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

app.post('/numbers/multiply', (req, res) => {
  if (req.body.a === undefined || req.body.b === undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(Number(req.body.a)) || Number.isNaN(Number(req.body.b))) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).json({ result: numbers.multiply(req.body.a, req.body.b) });
  }
});

app.post('/numbers/divide', (req, res) => {
  if (req.body.a === undefined || req.body.b === undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(Number(req.body.a)) || Number.isNaN(Number(req.body.b))) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else if (req.body.b == 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else {
    res.status(200).json({ result: numbers.divide(req.body.a, req.body.b) });
  }
});

app.post('/numbers/remainder', (req, res) => {
  if (req.body.a === undefined || req.body.b === undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(Number(req.body.a)) || Number.isNaN(Number(req.body.b))) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else if (req.body.b == 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else {
    res.status(200).json({ result: numbers.remainder(req.body.a, req.body.b) });
  }
});

module.exports = app;

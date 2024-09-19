const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 7865;

// To parse JSON item
app.use(bodyParser.json());

// Endpoint
app.get('/', (req, res) => {
    res.status(200).send('Welcome to the payment system');
})

// Endpoint ID
app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id;

  res.send(`Payment methods for cart ${id}`);
});

// Payments Endpoint
app.get('/available_payments', (_req, res) => {
  res.json({ payment_methods: { credit_cards: true, paypal: false } });
});

// Login endpoint
app.post('/login', (req, res) => {
  const username = req.body.userName || 'Unknown'; // Handle missing userName
  res.send(`Welcome ${username}`);
});

app.listen(port, () => {
    console.log(`API available on localhost port ${port}`);
})

module.exports = app;

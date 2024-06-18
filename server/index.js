const express = require('express');

const app = express();
const PORT = 9876;

app.use(express.json());

const getPrimes = () => {
  return [2, 3, 5, 7, 11];
};

const getEvenNumbers = () => {
  return [2, 4, 6, 8, 10];
};

const getFibonacci = () => {
  return [0, 1, 1, 2, 3, 5, 8];
};

// Endpoint to get even numbers
app.get('/number/e', (req, res) => {
  const evenNumbers = getEvenNumbers();
  res.json({ numbers: evenNumbers });
});

// Endpoint to get prime numbers
app.get('/number/primes', (req, res) => {
  const primeNumbers = getPrimes();
  res.json({ numbers: primeNumbers });
});

// Endpoint to get Fibonacci numbers
app.get('/number/fibo', (req, res) => {
  const fibonacciNumbers = getFibonacci();
  res.json({ numbers: fibonacciNumbers });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

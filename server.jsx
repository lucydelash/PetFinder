const express = require('express');
const app = express();
const PORT = 3000;

// Sample pet data
const pets = [
  { id: 1, name: 'Fluffy', owner: 'John' },
  { id: 2, name: 'ChimiChanga', owner: 'Tyler' },
  { id: 3, name: 'Mowgli', owner: 'Anusha' },
  { id: 4, name: 'Charmander', owner: 'Char' }
];

// API endpoint to get all pets
app.get('/api/v1/pets', (req, res) => {
  res.json(pets);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
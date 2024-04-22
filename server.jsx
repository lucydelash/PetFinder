const express = require('express');
const app = express();
const PORT = 3000;

// Sample pet data
const pets = [
  { id: 1, name: 'Fluffy', owner: 'John' },
  { id: 2, name: 'Max', owner: 'Alice' },
  { id: 3, name: 'Buddy', owner: 'John' },
  { id: 4, name: 'Charlie', owner: 'Alice' }
];

// API endpoint to get all pets
app.get('/api/v1/pets', (req, res) => {
  res.json(pets);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
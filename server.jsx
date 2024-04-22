const express = require('express');
const app = express();
const PORT = 3000;

// Sample pet data
const pets = [
  { id: 1, name: 'Fluffy', owner: 'John' },
  { id: 2, name: 'Chimi', owner: 'Tyler' },
  { id: 3, name: 'Mowgli', owner: 'Anusha' },
  { id: 4, name: 'Charmander', owner: 'Char' }
];

// GET all pets
app.get('/api/v1/pets', (req, res) => {
  res.json(pets);
});

// GET pets by name
app.get('/api/v1/pets/:name', (req, res) => {
  const { name } = req.params;
  const pet = pets.find(pet => pet.name.toLowerCase() === name.toLowerCase());
  if (!pet) {
    return res.status(404).json({ message: 'Pet not found' });
  }
  res.json(pet);
});

// GET pets by owner's name
app.get('/api/v1/pets/owner/:ownerName', (req, res) => {
  const { ownerName } = req.params;
  const petsByOwner = pets.filter(pet => pet.owner.toLowerCase() === ownerName.toLowerCase());
  if (petsByOwner.length === 0) {
    return res.status(404).json({ message: 'No pets found for this owner' });
  }
  res.json(petsByOwner);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
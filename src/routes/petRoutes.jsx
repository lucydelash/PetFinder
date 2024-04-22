const express = require('express');
const router = express.Router();
const petsData = require('./petsData.jsx');

// Get all pets
router.get('/pets', (req, res) => {
  res.json(petsData);
});

// Get pets by name
router.get('/pets/:name', (req, res) => {
  const { name } = req.params;
  const pet = petsData.find(pet => pet.name.toLowerCase() === name.toLowerCase());
  if (!pet) {
    return res.status(404).json({ message: 'Pet not found' });
  }
  res.json(pet);
});

// Get pets by owner's name
router.get('/pets/owner/:ownerName', (req, res) => {
  const { ownerName } = req.params;
  const petsByOwner = petsData.filter(pet => pet.owner.toLowerCase() === ownerName.toLowerCase());
  if (petsByOwner.length === 0) {
    return res.status(404).json({ message: 'No pets found for this owner' });
  }
  res.json(petsByOwner);
});

module.exports = router;
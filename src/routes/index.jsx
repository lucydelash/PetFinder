const express = require('express');
const router = express.Router();
const petRoutes = require('./petRoutes.jsx');

router.use('/api/v1', petRoutes);

module.exports = router;
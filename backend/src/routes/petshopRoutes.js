const express = require('express');
const router = express.Router();
const petshopController = require('../controllers/petshopController');

router.post('/best-petshop', petshopController.getBestPetshop);

module.exports = router;

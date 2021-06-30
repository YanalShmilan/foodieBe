const express = require('express');
const { Cuisine } = require('../db/models');
const upload = require('../middleware/multer');
const router = express.Router();
const { getCuisines } = require('../controllers/cuisinesController');

router.get('/', getCuisines);

module.exports = router;

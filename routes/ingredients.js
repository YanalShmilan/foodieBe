const express = require('express');
const { Recipe, Ingredient } = require('../db/models');
const router = express.Router();
const { getIngredients } = require('../controllers/ingredientsController');
router.get('/', getIngredients);
module.exports = router;

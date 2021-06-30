const express = require('express');
const { Cuisine, CuisineRecipes, Recipe } = require('../db/models');
const router = express.Router();
const upload = require('../middleware/multer');

const {
  getCuisines,
  createCuisine,
  createRecipe,
  getCuisineDetails,
} = require('../controllers/cuisinesController');
router.param('cuisineId', async (req, res, next, cuisineId) => {
  console.log("i'm here");
  const cuisine = await Cuisine.findByPk(cuisineId, {
    attributes: { exclude: ['createdAt', 'updatedAt'] },
    include: {
      model: Recipe,
      attributes: ['id'],
      through: { attributes: [] },
      as: 'recipes',
    },
  });
  if (cuisine) {
    req.cuisine = cuisine;
    next();
  } else {
    next({ message: 'cuisine not found', status: 404 });
  }
});

router.post('/:cuisineId/createRecipe', upload.single('img'), createRecipe);

router.get('/details/:cuisineId', getCuisineDetails);

router.get('/', getCuisines);

router.post('/', upload.single('img'), createCuisine);

module.exports = router;

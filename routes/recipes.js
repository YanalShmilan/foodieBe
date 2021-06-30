const express = require('express');
const { Recipe, Ingredient } = require('../db/models');
const upload = require('../middleware/multer');
const router = express.Router();

const {
  createRecipeIngredient,
  getRecipeDetails,
  getRecipes,
} = require('../controllers/recipesController');

router.param('recipeId', async (req, res, next, recipeId) => {
  console.log("i'm here");
  const recipe = await Recipe.findByPk(recipeId, {
    attributes: { exclude: ['createdAt', 'updatedAt'] },
    include: {
      model: Ingredient,
      attributes: ['id'],
      through: { attributes: [] },
      as: 'ingredients',
    },
  });
  if (recipe) {
    req.recipe = recipe;
    next();
  } else {
    next({ message: 'recipe not found', status: 404 });
  }
});

router.post('/:recipeId/createRecipe', createRecipeIngredient);
router.get('/details/:recipeId', getRecipeDetails);
router.get('/', getRecipes);

// router.get('/', getRecipes);

module.exports = router;

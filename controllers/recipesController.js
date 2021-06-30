const { Recipe, Ingredient, RecipeIngredients } = require('../db/models');

exports.createRecipeIngredient = async (req, res, next) => {
  try {
    let ingredients = req.body.ingredients;
    ingredients = ingredients.map((i) => ({
      recipeId: req.recipe.id,
      ingredientId: i,
    }));
    await RecipeIngredients.bulkCreate(ingredients);
    res.status(201).json('added');
  } catch (error) {
    next(error);
  }
};
exports.getRecipeDetails = async (req, res, next) => {
  res.status(200).json(req.recipe);
};
exports.getRecipes = async (req, res, next) => {
  try {
    const recipes = await Recipe.findAll({
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      include: {
        model: Ingredient,
        attributes: ['id'],
        through: { attributes: [] },
        as: 'ingredients',
      },
    });
    res.json(recipes);
  } catch (error) {
    next(error);
  }
};

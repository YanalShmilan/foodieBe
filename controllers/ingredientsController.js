const { Recipe, Ingredient, RecipeIngredients } = require('../db/models');

exports.getIngredients = async (req, res, next) => {
  try {
    const Ingredients = await Ingredient.findAll({
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });
    res.json(Ingredients);
  } catch (error) {
    next(error);
  }
};

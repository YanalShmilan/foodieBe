const {
  Cuisine,
  CuisineRecipes,
  Recipe,
  IngCat,
  Ingredient,
} = require('../db/models');
const ars = require('arslugify');
exports.getIngCats = async (req, res, next) => {
  try {
    const ingCats = await IngCat.findAll({
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      include: {
        model: Ingredient,
        attributes: ['id'],
        as: 'ingredients',
      },
    });
    res.json(ingCats);
  } catch (error) {
    next(error);
  }
};
exports.getIngCatDetails = async (req, res, next) => {
  res.status(200).json(req.ingCat);
};

exports.createIngCat = async (req, res, next) => {
  try {
    const newIngCat = await IngCat.create(req.body);

    res.status(201).json(newIngCat);
  } catch (error) {
    next(error);
  }
};
exports.createIngredient = async (req, res, next) => {
  try {
    console.log('hello');
    req.body.ingCatId = req.ingCat.id;

    const newIngredient = await Ingredient.create(req.body);

    // await CuisineRecipes.create({
    //   recipeId: newRecipe.id,
    //   cuisineId: req.cuisine.id,
    // });

    res.status(201).json(newIngredient);
  } catch (error) {
    next(error);
  }
};

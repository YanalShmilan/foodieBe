const { Cuisine, Recipe, CuisineRecipes } = require('../db/models');
const ars = require('arslugify');
exports.getCuisines = async (req, res, next) => {
  try {
    const cuisines = await Cuisine.findAll({
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      include: {
        model: Recipe,
        attributes: ['id'],
        through: { attributes: [] },
        as: 'recipes',
      },
    });
    res.json(cuisines);
  } catch (error) {
    next(error);
  }
};
exports.getCuisineDetails = async (req, res, next) => {
  res.status(200).json(req.cuisine);
};

exports.createCuisine = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.img = `http://${req.get('host')}/media/${req.file.filename}`;
    }
    req.body.slug = ars(req.body.name) + Date.now();
    const newCuisine = await Cuisine.create(req.body);

    res.status(201).json(newCuisine);
  } catch (error) {
    next(error);
  }
};
exports.createRecipe = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.img = `http://${req.get('host')}/media/${req.file.filename}`;
    }
    req.body.slug = ars(req.body.name) + Date.now();
    const newRecipe = await Recipe.create(req.body);
    console.log(newRecipe.id, req.cuisine.id);

    await CuisineRecipes.create({
      recipeId: newRecipe.id,
      cuisineId: req.cuisine.id,
    });

    res.status(201).json(newRecipe);
  } catch (error) {
    next(error);
  }
};

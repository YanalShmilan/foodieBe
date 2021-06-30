const { CuisineRecipe } = require('../db/models');

exports.getCuisines = async (req, res, next) => {
  try {
    const cuisines = await CuisineRecipe.findAll({
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });
    res.json(cuisines);
  } catch (error) {
    next(error);
  }
};

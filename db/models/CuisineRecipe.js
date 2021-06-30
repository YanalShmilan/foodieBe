const Cuisine = require('./Cuisine');
const Recipe = require('./Recipe');

module.exports = (sequelize, DataTypes) => {
  const CuisineRecipe = sequelize.define('CuisineRecipe', {
    cuisineId: {
      type: DataTypes.INTEGER,
      references: {
        model: Cuisine,
        key: 'id',
      },
    },
    recipeId: {
      type: DataTypes.INTEGER,
      references: {
        model: Recipe,
        key: 'id',
      },
    },
  });
  return CuisineRecipe;
};

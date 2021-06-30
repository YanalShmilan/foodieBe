const Recipe = require('./Recipe');
const Ingredient = require('./Ingredient');

module.exports = (sequelize, DataTypes) => {
  const RecipeIngredients = sequelize.define('RecipeIngredients', {
    recipeId: {
      type: DataTypes.INTEGER,
      references: {
        model: Recipe,
        key: 'id',
      },
    },
    ingredientId: {
      type: DataTypes.INTEGER,
      references: {
        model: Ingredient,
        key: 'id',
      },
    },
  });
  return RecipeIngredients;
};

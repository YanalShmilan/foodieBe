const SequelizeSlugify = require('sequelize-slugify');
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    name: { type: DataTypes.STRING, allowNull: false },
    img: DataTypes.STRING,
    slug: {
      type: DataTypes.STRING,
      unique: true,
    },
  });
  Recipe.associate = (models) => {
    Recipe.belongsToMany(models.Ingredient, {
      through: models.RecipeIngredients,
      as: 'ingredients',
      foreignKey: 'recipeId',
    });
    models.Ingredient.belongsToMany(Recipe, {
      through: models.RecipeIngredients,
      as: 'recipes',
      foreignKey: 'ingredientId',
    });
  };
  return Recipe;
};

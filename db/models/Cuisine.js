const SequelizeSlugify = require('sequelize-slugify');
module.exports = (sequelize, DataTypes) => {
  const Cuisine = sequelize.define('Cuisine', {
    name: { type: DataTypes.STRING, allowNull: false },
    img: DataTypes.STRING,
    slug: {
      type: DataTypes.STRING,
      unique: true,
    },
  });
  Cuisine.associate = (models) => {
    Cuisine.belongsToMany(models.Recipe, {
      through: models.CuisineRecipes,
      as: 'recipes',
      foreignKey: 'cuisineId',
    });
    models.Recipe.belongsToMany(Cuisine, {
      through: models.CuisineRecipes,
      as: 'cuisines',
      foreignKey: 'recipeId',
    });
  };
  return Cuisine;
};

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
  SequelizeSlugify.slugifyModel(Cuisine, { source: ['name'] });
  Cuisine.associate = (models) => {
    Cuisine.belongsToMany(models.Recipe, {
      through: models.CuisineRecipe,
      as: 'recipes',
      foreignKey: 'cuisineId',
    });
    models.Recipe.belongsToMany(Cuisine, {
      through: models.CuisineRecipe,
      as: 'cuisines',
      foreignKey: 'recipeId',
    });
  };
  return Cuisine;
};

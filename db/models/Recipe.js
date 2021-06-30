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
  SequelizeSlugify.slugifyModel(Recipe, { source: ['name'] });
  Recipe.associate = (models) => {
    // models.Shop.hasMany(Product, { foreignKey: 'shopId', as: 'products' });
    // Product.belongsTo(models.Shop, { foreignKey: 'shopId' });
  };
  return Recipe;
};

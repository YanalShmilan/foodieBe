module.exports = (sequelize, DataTypes) => {
  const Ingredient = sequelize.define('Ingredient', {
    name: { type: DataTypes.STRING, allowNull: false },
    calories: DataTypes.STRING,
  });
  Ingredient.associate = (models) => {
    // models.Shop.hasMany(Product, { foreignKey: 'shopId', as: 'products' });
    // Product.belongsTo(models.Shop, { foreignKey: 'shopId' });
  };
  return Ingredient;
};

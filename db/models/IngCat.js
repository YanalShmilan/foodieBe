module.exports = (sequelize, DataTypes) => {
  const IngCat = sequelize.define('IngCat', {
    name: { type: DataTypes.STRING, allowNull: false },
  });
  IngCat.associate = (models) => {
    IngCat.hasMany(models.Ingredient, {
      foreignKey: 'ingCatId',
      as: 'ingredients',
    });
    models.Ingredient.belongsTo(IngCat, { foreignKey: 'ingCatId' });
  };
  return IngCat;
};

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'Ingredients',
      'ingCatId',
      Sequelize.INTEGER,
      {
        allowNull: false,
        references: {
          model: {
            tableName: 'IngCats',
          },
          key: 'id',
        },
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Ingredients', 'ingCatId');
  },
};

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('CuisineRecipe', {
      cuisineId: Sequelize.INTEGER,
      recipeId: Sequelize.INTEGER,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('CuisineRecipe');
  },
};

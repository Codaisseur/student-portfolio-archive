'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("paragraphs", "paragraphNumber", {
      type: Sequelize.INTEGER,
      allowNull: false
    });
  },
  down: async (queryInterface, Sequelize) => {
      return queryInterface.removeColumn("paragraphs", "paragraphNumber");
  }
};

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("stories", "pg", {
      type: Sequelize.INTEGER,
      allowNull: false
    });
    await queryInterface.addColumn("stories", "imgUrl", {
      type: Sequelize.TEXT,
    });
  },

  down: async(queryInterface, Sequelize) => {
    await queryInterface.removeColumn("stories", "titleClicked");
    await queryInterface.removeColumn("stories", "imgUrl");
  }
};

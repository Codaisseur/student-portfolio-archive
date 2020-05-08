'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('paragraphs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      storyId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "stories",
          id: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      text: {
        type: Sequelize.TEXT
      },
      timesRead: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('paragraphs');
  }
};
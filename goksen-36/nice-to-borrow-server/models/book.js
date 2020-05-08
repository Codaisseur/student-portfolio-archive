"use strict";
module.exports = (sequelize, DataTypes) => {
  const book = sequelize.define(
    "book",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      language: {
        type: DataTypes.STRING,
        allowNull: false
      },
      isAvailable: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      },
      imageUrl: {
        type: DataTypes.TEXT
      },
      description: {
        type: DataTypes.TEXT
      },
      author: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      borrowingPeriod: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {}
  );
  book.associate = function(models) {
    book.belongsTo(models.user);
    book.belongsToMany(models.user, {
      through: "borrowedItems",
      foreignKey: "bookId"
    });
  };
  return book;
};

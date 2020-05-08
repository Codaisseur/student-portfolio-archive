"use strict";
module.exports = (sequelize, DataTypes) => {
  const borrowedItem = sequelize.define(
    "borrowedItem",
    {
      userId: DataTypes.INTEGER,
      bookId: DataTypes.INTEGER,
      startDate: DataTypes.DATE,
      endDate: DataTypes.DATE
    },
    {}
  );
  borrowedItem.associate = function(models) {
    borrowedItem.belongsTo(models.user);
    borrowedItem.belongsTo(models.book);
  };
  return borrowedItem;
};

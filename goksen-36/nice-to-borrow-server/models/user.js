"use strict";
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define("user", {
    userName: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location: {
      type: DataTypes.GEOMETRY("POINT", 4326),
      allowNull: false
    }
  });
  user.associate = function(models) {
    user.hasMany(models.book);
    user.belongsToMany(models.book, {
      through: "borrowedItems",
      foreignKey: "userId"
    });
  };
  return user;
};

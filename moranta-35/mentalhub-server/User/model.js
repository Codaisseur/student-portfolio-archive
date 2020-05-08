const db = require("../db");
const Sequelize = require("sequelize");
const PracticiansFile = require("../PracticiansFile/model");
const PatientsFile = require("../PatientsFile/model");

const User = db.define(
  "users",
  {
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    profilePicture: {
      type: Sequelize.STRING,
      allowNull: true
    },
    whatsAppNumber: {
      type: Sequelize.STRING,
      allowNull: true
    },
    gender: {
      type: Sequelize.STRING,
      allowNull: true
    },
    practician: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    },
    languages: {
      type: Sequelize.ARRAY(Sequelize.STRING),
      allowNull: true
    }
  },
  {
    timestamps: false
  }
);

PracticiansFile.belongsTo(User);
PatientsFile.belongsTo(User);
User.hasOne(PracticiansFile);
module.exports = User;

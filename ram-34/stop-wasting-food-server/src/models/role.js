const Sequelize = require("sequelize");
const db = require("../db");

const Role = db.define("role", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  }
});

module.exports = Role;

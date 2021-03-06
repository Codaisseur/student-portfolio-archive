const Sequelize = require("sequelize");
const db = require("../db");
const Role = require("./role");

const User = db.define("user", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
});
User.belongsTo(Role);
Role.hasMany(User);

module.exports = User;

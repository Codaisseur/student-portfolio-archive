const Sequelize = require("sequelize");
const db = require("../db");
const Country = require("../country/model");

const City = db.define("city", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

City.belongsTo(Country);

module.exports = City;

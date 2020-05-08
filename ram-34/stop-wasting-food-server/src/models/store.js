const Sequelize = require("sequelize");
const db = require("../db");
const User = require("./user");

const Store = db.define("store", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  address: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  city: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  postal_code: {
    type: Sequelize.STRING,
    allowNull: false
  },
  latitude: {
    type: Sequelize.STRING,
    allowNull: false
  },
  longitude: {
    type: Sequelize.STRING,
    allowNull: false
  }
});
Store.belongsTo(User);

module.exports = Store;

const Sequelize = require("sequelize");
const db = require("../db");
const Store = require("./store");

const Product = db.define("product", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  imageurl: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});
Product.belongsTo(Store);
Store.hasMany(Product);

module.exports = Product;

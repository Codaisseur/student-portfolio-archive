const Sequelize = require("sequelize");
const db = require("../db");
const Store = require("./store");
const Product = require("./product");
const User = require("./user");

const Order = db.define("order", {
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 1
  },
  order_id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV1,
    unique: true
  },
  isProcessed: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  timeout: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
});

Order.belongsTo(Product);
Product.hasMany(Order);
Order.belongsTo(Store);
Store.hasMany(Order);
Order.belongsTo(User);
User.hasMany(Order);

module.exports = Order;

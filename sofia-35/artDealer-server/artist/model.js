const Sequelize = require("sequelize");
const db = require("../db");

const Artist = db.define("artist", {
  login: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: { args: true, msg: "Login already in use!" }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: { args: true, msg: "Please provide valid email!" }
    },
    unique: { args: true, msg: "Email address already in use!" }
  },
  first_name: { type: Sequelize.STRING, allowNull: true },
  last_name: { type: Sequelize.STRING, allowNull: true },
  bio: { type: Sequelize.TEXT, allowNull: true },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      // CHECK and IMPROVE VALIDATION
      len: { args: 6, msg: "Password length should be at least 6 symbols" }
    }
  },
  avatar: { type: Sequelize.TEXT, allowNull: true }
});

module.exports = Artist;

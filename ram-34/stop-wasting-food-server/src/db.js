const Sequelize = require("sequelize");
const databaseUrl = process.env.DATABASE_URL;
const db = new Sequelize(databaseUrl);

db.sync({ force: false })
  .then(() => console.log("DB connected"))
  .catch(console.error);

module.exports = db;

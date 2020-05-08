module.exports = {
  development: {
    username: "postgres",
    password: "secret",
    database: "NICE_TO_BORROW_development",
    host: "localhost",
    dialect: "postgres",
    operatorsAliases: "0"
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "postgres",
    operatorsAliases: "0"
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DATABASE_URL,
    dialect: "postgres",
    operatorsAliases: "0"
  }
};

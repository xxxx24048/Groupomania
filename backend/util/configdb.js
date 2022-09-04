const Sequelize = require("sequelize");

const sequelize = new Sequelize("testdb", "root", "password", {
  dialect: "mysql",
  host: "localhost", //Optional 
});

module.exports = sequelize;
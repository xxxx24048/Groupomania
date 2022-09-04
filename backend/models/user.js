const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Users = sequelize.define("users", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  username: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  password:{
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  bio:{
    type:Sequelize.TEXT,
    allowNull:true,
  },
  avatar:{
    type: Sequelize.STRING(120),
    allowNull:true,
  },
  isAdmin: {
    type: Sequelize.BOOLEAN,
    allowNull:false,
    defaultValue: false,
},
});

module.exports = Users;
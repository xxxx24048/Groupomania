const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Messages = sequelize.define("messages", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  attachment:{
    type: Sequelize.STRING(12),
    allowNull: true,
  },
  likes:{
    type:Sequelize.INTEGER,
    allowNull:false,
    defaultValue: false,
  },
});

module.exports = Messages;
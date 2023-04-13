const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Click extends Model {}

Click.init(
  {
    count: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
  }
);

module.exports = Click;

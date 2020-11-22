"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      name: DataTypes.STRING,
      family_name: DataTypes.STRING,
      category: DataTypes.STRING,
      password_hash: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
      tableName: "node_users",
    }
  );
  return User;
};

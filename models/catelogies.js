"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Catelogies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Catelogies.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      catelogy: {
        type: DataTypes.JSON,
      },
      path : {
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Catelogies",
    }
  );
  return Catelogies;
};

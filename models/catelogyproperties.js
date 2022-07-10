"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CatelogyProperties extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Catelogies }) {
      // define association here
      this.belongsTo(Catelogies, { foreignKey: "catelogies_id" });
    }
  }
  CatelogyProperties.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      catelogies_id: {
        type: DataTypes.INTEGER,
      },
      details: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "CatelogyProperties",
    }
  );
  return CatelogyProperties;
};

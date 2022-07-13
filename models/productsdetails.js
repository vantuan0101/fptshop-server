"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProductsDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Products }) {
      // define association here
      this.belongsTo(Products, { foreignKey: "product_id" });
    }
  }
  ProductsDetails.init(
    {
      color: {
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.TEXT,
        // defaultValue: "https://via.placeholder.com/150",
      },
      description: {
        type: DataTypes.TEXT,
      },
      specification: {
        type: DataTypes.TEXT,
      },
      payment: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "ProductsDetails",
    }
  );
  return ProductsDetails;
};

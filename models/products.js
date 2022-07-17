"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
    }
  }
  Products.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      brand: {
        type: DataTypes.STRING,

      },
      discount: {
        type: DataTypes.STRING,
        defaultValue: 0,
      },
      flash_sale: {
        type: DataTypes.BOOLEAN,
      },
      options: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      sold: {
        type: DataTypes.BIGINT,
      },
      gift_online: {
        type: DataTypes.BOOLEAN,
      },
      thumbnail: {
        type: DataTypes.STRING,
      },
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
      modelName: "Products",
    }
  );
  return Products;
};

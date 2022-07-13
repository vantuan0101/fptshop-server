"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ ProductsDetails, Brands }) {
      // define association here
      this.hasOne(ProductsDetails, { foreignKey: "product_id" });
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
      }
    },
    {
      sequelize,
      modelName: "Products",
    }
  );
  return Products;
};

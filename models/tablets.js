"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Tablets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ BrandTablets }) {
      // define association here
      this.belongsTo(BrandTablets, { foreignKey: "brand_id" });
    }
  }
  Tablets.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      brand: {
        type: DataTypes.STRING,
      },

      isHot: {
        type: DataTypes.BOOLEAN,
      },
      discount: {
        type: DataTypes.STRING,

      },
      discountValue: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      options: {
        type: DataTypes.JSON,
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
        type: DataTypes.JSON,
        defaultValue : '{"public_id" : null,"url" : "http://localhost:3001/public/images/default/default-loading-image.png"}',

      },
      color: {
        type: DataTypes.JSON,
      },
      image: {
        type: DataTypes.JSON,
        // defaultValue: "https://via.placeholder.com/150",
      },
      payment: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Tablets",
    }
  );
  return Tablets;
};

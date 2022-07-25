'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Accessories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({BrandAccessories}) {
      // define association here
      this.belongsTo(BrandAccessories, { foreignKey: "brand_id" });

    }
  }
  Accessories.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    brand: {
      type: DataTypes.STRING,
    },
    
    isHot :{
      type: DataTypes.BOOLEAN,
    },
    discount: {
      type: DataTypes.STRING,
      defaultValue: 0,
    },
    flash_sale: {
      type: DataTypes.BOOLEAN,
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
      type: DataTypes.STRING,
    },
    color: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.JSON,
      // defaultValue: "https://via.placeholder.com/150",
    },
    payment: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'Accessories',
  });
  return Accessories;
};
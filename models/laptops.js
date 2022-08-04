'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Laptops extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({BrandLaptops }) {
      // define association here
      this.belongsTo(BrandLaptops, { foreignKey: "brand_id" });


    }
  }
  Laptops.init({
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
    modelName: 'Laptops',
  });
  return Laptops;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BrandLaptops extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Laptops}) {
      // define association here
      this.hasMany(Laptops, { foreignKey: "brand_id" });

    }
  }
  BrandLaptops.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BrandLaptops',
  });
  return BrandLaptops;
};
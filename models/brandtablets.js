'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BrandTablets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Tablets}) {
      // define association here
      this.hasMany(Tablets, { foreignKey: "brand_id" });

    }
  }
  BrandTablets.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BrandTablets',
  });
  return BrandTablets;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BrandAccessories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Accessories}) {
      // define association here
      this.hasMany(Accessories, { foreignKey: "brand_id" });

    }
  }
  BrandAccessories.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BrandAccessories',
  });
  return BrandAccessories;
};
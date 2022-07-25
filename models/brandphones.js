'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BrandPhones extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Phones}) {
      // define association here
      this.hasMany(Phones, { foreignKey: "brand_id" });

    }
  }
  BrandPhones.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BrandPhones',
  });
  return BrandPhones;
};
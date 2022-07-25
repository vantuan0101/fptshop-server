'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BrandDesktops extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Desktops}) {
      // define association here
      this.hasMany(Desktops, { foreignKey: "brand_id" });

    }
  }
  BrandDesktops.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BrandDesktops',
  });
  return BrandDesktops;
};
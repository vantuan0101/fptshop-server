"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class StatusSales extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Phones,Laptops,Desktops,Tablets,Accessories}) {
      // define association here
      this.hasMany(Phones , {foreignKey: "status_sale"});
      this.hasMany(Laptops , {foreignKey: "status_sale"});
      this.hasMany(Desktops , {foreignKey: "status_sale"});
      this.hasMany(Tablets , {foreignKey: "status_sale"});
      this.hasMany(Accessories , {foreignKey: "status_sale"});
      
    }
  }
  StatusSales.init(
    {
      onSale : {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      }
    },
    
    {
      sequelize,
      modelName: "StatusSales",
    }
  );
  return StatusSales;
};

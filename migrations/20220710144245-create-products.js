'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
      },
      brand: {
        type: Sequelize.STRING,
      },
      discount: {
        type: Sequelize.STRING,
      },
      flash_sale: {
        type: Sequelize.BOOLEAN,
      },
      options: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.INTEGER,
      },
      thumbnail: {
        type: Sequelize.TEXT,
        defaultValue: "https://via.placeholder.com/150",

      },
      sold : {
        type : Sequelize.BIGINT,
      },
      gift_online:{
        type : Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};
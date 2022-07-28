'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tablets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      brand_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "BrandTablets",

          key: "id",
        },
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      brand: {
        type: Sequelize.STRING,
      },
      isHot :{
        type: Sequelize.BOOLEAN,
      },
      discount: {
        type: Sequelize.STRING,
        defaultValue: 0,
      },
      status_sale: {
        type: Sequelize.INTEGER,
        references: {
          model: "StatusSales",
          key: "id",
        },
      },
      options: {
        type: Sequelize.JSON,
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      sold: {
        type: Sequelize.BIGINT,
      },
      gift_online: {
        type: Sequelize.BOOLEAN,
      },
      thumbnail: {
        type: Sequelize.STRING,
      },
      color: {
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.JSON,
      },
      payment: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('Tablets');
  }
};
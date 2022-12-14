"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Laptops", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      brand_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "BrandLaptops",
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
      isHot: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      discount: {
        type: Sequelize.STRING,
      },
      discountValue: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
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
        defaultValue: false,
      },
      thumbnail: {
        type: Sequelize.JSON,
      },
      color: {
        type: Sequelize.JSON,
      },
      image: {
        type: Sequelize.JSON,
      },
      payment: {
        type: Sequelize.STRING,
      },
      typeProduct: {
        type: Sequelize.STRING,
        defaultValue: "laptop",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Laptops");
  },
};

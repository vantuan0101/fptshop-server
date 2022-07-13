"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("ProductsDetails", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      color: {
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.TEXT,
        defaultValue: "https://via.placeholder.com/150",
      },
      description: {
        type: Sequelize.TEXT,
      },
      specification: {
        type: Sequelize.TEXT,
      },
      payment: {
        type: Sequelize.STRING,
      },
      product_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Products",
          key: "id",
        },
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
    await queryInterface.dropTable("ProductsDetails");
  },
};

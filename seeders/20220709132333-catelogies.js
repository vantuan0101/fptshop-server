"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Catelogies",
      [
        {
          name: "Điện thoại",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Laptop",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Máy tính bảng",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Thiết bị thông minh",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Gia dụng",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Catelogies", null, {});
  },
};

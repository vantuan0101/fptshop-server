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
      "Products",
      [
        {
          name: "iPhone 13 Pro Max 128GB",
          discount: "Giam gia 10%",
          price: 33990000,
          brand_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "OPPO Reno7 Z 5G 8GB - 128GB",
          discount: "Giam gia 500.000đ",
          price: 33990000,
          brand_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          name: "iPhone 13 Pro Max 128GB",
          discount: "Giam gia 10%",
          price: 33990000,
          brand_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          name: "iPhone 13 Pro Max 128GB",
          discount: "Giam gia 10%",
          price: 33990000,
          brand_id: 1,
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
     await queryInterface.bulkDelete('Products', null, {});
  },
};

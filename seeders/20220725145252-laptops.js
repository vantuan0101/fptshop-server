"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert("People", [{
     *   name: "John Doe",
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Laptops",
      [
        {
          name: "Lenovo Ideapad Slim 5 15ITL05 i5 1135G7",
          brand: "Lenovo",
          isHot: true,
          brand_id: 6,
          discount: "Giam gia 10%",
          options: '["128GB","256GB","1TB"]',
          price: 33990000,
          sold: 30,
          gift_online: true,
          thumbnail: "Giam gia 10%",
          createdAt: new Date(),
          updatedAt: new Date(),
          color: '["Xanh", "Xanh lá" , "Vàng" , "Bạc", "Xám"]',
          image: '["128GB","256GB","1TB"]',

          payment: "TPbank, Visa",
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
     * await queryInterface.bulkDelete("People", null, {});
     */
    await queryInterface.bulkDelete("Laptops", null, {});
  },
};

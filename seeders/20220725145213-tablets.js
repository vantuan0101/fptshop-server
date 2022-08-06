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
      "Tablets",
      [
        {
          name: "iPad Pro 11 2021 M1 Wi-Fi",
          brand: "Apple",
          isHot: true,
          brand_id: 1,
          discount: "Giam gia 10%",
          options: '["128GB","256GB","1TB"]',
          price: 33990000,
          sold: 30,
          gift_online: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          color: '["Xanh", "Xanh lá" , "Vàng" , "Bạc", "Xám"]',
          thumbnail: "Giam gia 10%",
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
    await queryInterface.bulkDelete("Tablets", null, {});
  },
};

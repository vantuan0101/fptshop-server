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
      "Accessories",
      [
        {
          name: "PC GAMING E-POWER 030 Core i5 11400F 2.6 GHz-4.4 GHz/16 GB/240 GB/600 W/GeForce GTX 1650",
          brand: "E-POWER",
          isHot: true,
          brand_id: 6,
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
    await queryInterface.bulkDelete("Accessories", null, {});
  },
};

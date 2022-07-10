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
      "ProductsDetails",
      [
        {
          color: "Pink , Gray",
          image: "https://via.placeholder.com/150",
          description:
            "Lorem ipsum dolaborum.",
          specification:
            "Lorem ipsum dolaborum.",
          payment: "TPbank, Visa",
          product_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          color: "Red , Gray",
          image: "https://via.placeholder.com/150",
          description:
            "Lorem ipsum",
          specification:
            "Lorem ipsum",
          payment: "TPbank, Visa",
          product_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          color: "Blue , Gray",
          image: "https://via.placeholder.com/150",
          description:
            "Lorem ipsum",
          specification:
            "Lorem ipsum",
          payment: "TPbank, Visa",
          product_id: 2,
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
     await queryInterface.bulkDelete('ProductsDetails', null, {});
  },
};

'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
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
      "BrandPhones",
      [
        {
          name: "Apple",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Samsung",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Xiaomi",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Oppo",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vivo",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('BrandPhones', null, {});
     */
     await queryInterface.bulkDelete('BrandPhones', null, {});
  }
};

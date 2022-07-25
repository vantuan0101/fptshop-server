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
      "BrandTablets",
      [
        {
          name: "Apple(iPad)",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Samsung",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Masstel",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lenovo",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Xiaomi",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lenovo",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Coolpad",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nexta",
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
     * await queryInterface.bulkDelete('BrandTablets', null, {});
     */
     await queryInterface.bulkDelete('BrandTablets', null, {});
  }
};

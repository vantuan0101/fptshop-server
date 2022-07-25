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
      "BrandLaptops",
      [
        {
          name: "Apple(Macbook)",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Asus",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "HP",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Acer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "MSI",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lenovo",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dell",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Microsoft(Surface)",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Gigabyte",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Fujitsu",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Chuwi",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Avita",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Masstel",
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
     * await queryInterface.bulkDelete('BrandLaptops', null, {});
     */
     await queryInterface.bulkDelete('BrandLaptops', null, {});
  }
};

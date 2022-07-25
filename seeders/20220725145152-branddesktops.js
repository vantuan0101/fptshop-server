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
      "BrandDesktops",
      [
        {
          name: "Apple(iMac)",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Apple(Mac mini",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lenovo",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "HP",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Asus",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "E-Power",
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
     * await queryInterface.bulkDelete('BrandDesktops', null, {});
     */
     await queryInterface.bulkDelete('BrandDesktops', null, {});
  }
};

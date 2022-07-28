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
      "Users",
      [
        {
          first_name: "Tuấn",
          last_name: "Van",
          email: "vantuan@gmail.com",
          phone: 339701312,
          password: "123456",
          type_user: "admin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          first_name: "Long",
          last_name: "Van",
          email: "vanlong@gmail.com",
          phone: 339701312,
          password: "123456",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          first_name: "Thanh",
          last_name: "Van",
          email: "vanthanh@gmail.com",
          phone: 339701312,
          password: "123456",
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
     * await queryInterface.bulkDelete('Users', null, {});
     */
    await queryInterface.bulkDelete("Users", null, {});
  },
};

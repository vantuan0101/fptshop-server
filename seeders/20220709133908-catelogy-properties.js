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
      "CatelogyProperties",
      [
        {
          name: "HÃNG SẢN XUẤT",
          details:
            "Apple (iPhone),Samsung,OPPO,Xiaomi,Vivo,Tecno,Nokia,Asus,Masstel,Realme",
          catelogies_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "ĐỒNG HỒ THÔNG MINH",
          details:"Apple Watch,Samsung,Oppo,Masstel,Xiaomi,Garmin,Huawei",
          catelogies_id: 1,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Hang San Xuat",
          details:"Apple Watch,Samsung,Oppo,Masstel,Xiaomi,Garmin,Huawei",
          catelogies_id: 2,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Phan Men",
          details:"BKAV,Cleaner",
          catelogies_id: 2,

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
     * await queryInterface.bulkDelete('CatelogyProperties', null, {});
     */
    await queryInterface.bulkDelete("CatelogyProperties", null, {});
  },
};

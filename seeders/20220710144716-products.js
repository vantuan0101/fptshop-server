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
      "Products",
      [
        {
          name: "iPhone 13 Pro Max 128GB",
          brand : "Apple",
          discount: "Giam gia 10%",
          flash_sale: true,
          options : "128GB,256GB,1TB",
          price: 33990000,
          sold : 30,
          gift_online : true,
          thumbnail : 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/4/25/637864982144816513_iphone-13-pro-max-dd-2-128-256-512-1tb.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Samsung Galaxy S22 Ultra 5G Phiên Bản Giới Hạn",
          brand : "Samsung",
          flash_sale: false,
          options : null,
          discount: "Giam gia 500.000đ",
          price: 30990000,
          sold : 10,
          gift_online : true,
          thumbnail : "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/6/20/637913430979194200_samsung-galaxy-s22-ultra-phien-ban-gioi-han-dd.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          name: "iPhone 11 64GB",
          brand : "Apple",
          flash_sale: false,
          options : '64GB,128GB',
          discount: "Giam gia 300.000đ",
          price: 11000000,
          sold : 6,
          gift_online : true,
          thumbnail :"https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/10/26/637393169370871358_ip-11-dd.png",
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          name: "Samsung Galaxy Z Flip3 5G Phiên Bản Giới Hạn",
          brand : "Samsung",
          flash_sale: true,
          options : null,
          discount: "Giam gia 5%",
          price: 17990000,
          sold : 15,
          gift_online : true,
          thumbnail : "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/5/17/637884047165637622_samsung-galaxy-z-flip3-phien-ban-gioi-han-dd.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          name: "Xiaomi 11 Lite 5G NE 8GB - 256GB",
          brand : "Xiaomi",
          flash_sale: true,
          options : null,
          discount: "Giam gia 100.000đ",
          price: 7990000,
          sold : 5,
          gift_online : true,
          thumbnail : "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/2/28/637816731075634766_xiaomi-redmi-note-11s-xam-dd-2.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          name: "Xiaomi Redmi Note 11S 6GB - 128GB",
          brand : "Xiaomi",
          flash_sale: false,
          options : null,
          discount: "Giam gia 100.000đ",
          price: 5990000,
          sold : 5,
          gift_online : true,
          thumbnail :"https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/2/28/637816723748685208_00773657-dd-2.jpeg",
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
     await queryInterface.bulkDelete('Products', null, {});
  },
};

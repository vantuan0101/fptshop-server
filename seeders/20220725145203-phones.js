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
      "Phones",
      [
        {
          name: "iPhone 13 Pro Max 128GB",
          brand: "Apple",
          isHot: true,
          brand_id: 1,
          discount: "Giam gia 10%",
          options: '["128GB","256GB","1TB"]',
          price: 33990000,
          sold: 30,
          gift_online: true,
          thumbnail:
            "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/4/25/637864982144816513_iphone-13-pro-max-dd-2-128-256-512-1tb.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          color: '["Xanh", "Xanh lá" , "Vàng" , "Bạc", "Xám"]',
          image:
            '["https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/iphone-13-pro-max-2.jpg","https://fptshop.com.vn/Uploads/images/2015/0511/iphone-13-pro-new-1.JPG,https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/BaoPK/SmartphoneChupDep/iphone-13-pro-max-xanh-la.jpg","https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/iphone-13-pro-max-3.jpg","https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/iphone-13-pro-max-4.jpg,https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/iphone-13-pro-16.jpg","https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/iphone-13-pro-7.jpg"]',

          payment: "TPbank, Visa",
        },
        {
          name: "Samsung Galaxy S22 Ultra 5G Phiên Bản Giới Hạn",
          brand: "Samsung",
          brand_id: 2,
          isHot: false,

          options: null,
          discount: "Giam gia 500.000đ",
          price: 30990000,
          sold: 10,
          gift_online: true,
          thumbnail:
            "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/6/20/637913430979194200_samsung-galaxy-s22-ultra-phien-ban-gioi-han-dd.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          color: '["Xanh", "Xanh lá" , "Vàng" , "Bạc", "Xám"]',
          image:
            '["https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/02/Samsung-Galaxy-S22-Ultra-ban-gioi-han.jpg","https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/02/Samsung-Galaxy-S22-Ultra-ban-gioi-han-1.jpg","https://fptshop.com.vn/Uploads/images/2015/0511/samsung-galaxy-s22-ultra-limited-6.jpg","https://fptshop.com.vn/Uploads/images/2015/0511/samsung-galaxy-s22-ultra-limited-1.jpg"]',

          payment: "TPbank, Visa",
        },
        {
          name: "iPhone 11 64GB",
          brand: "Apple",
          brand_id: 1,
          isHot: false,

          options: '["64GB","128GB"]',
          discount: "Giam gia 300.000đ",
          price: 11000000,
          sold: 6,
          gift_online: true,
          thumbnail:
            "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/10/26/637393169370871358_ip-11-dd.png",
          createdAt: new Date(),
          updatedAt: new Date(),
          color: '["Xanh", "Xanh lá" , "Vàng" , "Bạc", "Xám"]',
          image:
            '["https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/iphone-11-1.jpg","https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/iphone-11-2.jpg","https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/iphone-11-3.jpg","https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/iphone-11-4.jpg","https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/iphone-11-5.jpg"]',

          payment: "TPbank, Visa",
        },
        {
          name: "Samsung Galaxy Z Flip3 5G Phiên Bản Giới Hạn",
          brand: "Samsung",
          brand_id: 2,
          isHot: true,

          options: null,
          discount: "Giam gia 5%",
          price: 17990000,
          sold: 15,
          gift_online: true,
          thumbnail:
            "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/5/17/637884047165637622_samsung-galaxy-z-flip3-phien-ban-gioi-han-dd.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          color: '["Xanh", "Xanh lá" , "Vàng" , "Bạc", "Xám"]',
          image:
            '["https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/iphone-11-1.jpg","https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/iphone-11-2.jpg","https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/iphone-11-3.jpg","https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/iphone-11-4.jpg","https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/iphone-11-5.jpg"]',

          payment: "TPbank, Visa",
        },
        {
          name: "Xiaomi 11 Lite 5G NE 8GB - 256GB",
          brand: "Xiaomi",
          brand_id: 3,
          isHot: true,

          options: null,
          discount: "Giam gia 100.000đ",
          price: 7990000,
          sold: 5,
          gift_online: true,
          thumbnail:
            "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/2/28/637816731075634766_xiaomi-redmi-note-11s-xam-dd-2.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          color: '["Xanh", "Xanh lá" , "Vàng" , "Bạc", "Xám"]',
          image:
            '["https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/iphone-11-1.jpg","https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/iphone-11-2.jpg","https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/iphone-11-3.jpg","https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/iphone-11-4.jpg","https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/iphone-11-5.jpg"]',

          payment: "TPbank, Visa",
        },
        {
          name: "Xiaomi Redmi Note 11S 6GB - 128GB",
          brand: "Xiaomi",
          brand_id: 3,

          isHot: true,
          options: null,
          discount: "Giam gia 100.000đ",
          price: 5990000,
          sold: 5,
          gift_online: true,
          thumbnail:
            "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/2/28/637816723748685208_00773657-dd-2.jpeg",
          createdAt: new Date(),
          updatedAt: new Date(),
          color: '["Xanh", "Xanh lá" , "Vàng" , "Bạc", "Xám"]',
          image:
            '["https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/iphone-11-1.jpg","https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/iphone-11-2.jpg","https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/iphone-11-3.jpg","https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/iphone-11-4.jpg","https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/iphone-11-5.jpg"]',

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
    await queryInterface.bulkDelete("Phones", null, {});
  },
};

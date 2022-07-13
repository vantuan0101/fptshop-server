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
          color: "Xanh, Xanh lá , Vàng , Bạc, Xám",
          image: "https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/iphone-13-pro-max-2.jpg,https://fptshop.com.vn/Uploads/images/2015/0511/iphone-13-pro-new-1.JPG,https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/BaoPK/SmartphoneChupDep/iphone-13-pro-max-xanh-la.jpg,https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/iphone-13-pro-max-3.jpg,https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/iphone-13-pro-max-4.jpg,https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/iphone-13-pro-16.jpg,https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/iphone-13-pro-7.jpg",
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
          image: "https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/02/Samsung-Galaxy-S22-Ultra-ban-gioi-han.jpg,https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/02/Samsung-Galaxy-S22-Ultra-ban-gioi-han-1.jpg,https://fptshop.com.vn/Uploads/images/2015/0511/samsung-galaxy-s22-ultra-limited-6.jpg,https://fptshop.com.vn/Uploads/images/2015/0511/samsung-galaxy-s22-ultra-limited-1.jpg",
          description:
            "Lorem ipsum",
          specification:
            "Lorem ipsum",
          payment: "TPbank, Visa",
          product_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          color: "Blue , Gray",
          image: "https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/iphone-11-1.jpg,https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/iphone-11-2.jpg,https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/iphone-11-3.jpg,https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/iphone-11-4.jpg,https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/iphone-11-5.jpg,",
          description:
            "Lorem ipsum",
          specification:
            "Lorem ipsum",
          payment: "TPbank, Visa",
          product_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          color: "Blue , Gray",
          image: "https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/iphone-11-1.jpg,https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/iphone-11-2.jpg,https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/iphone-11-3.jpg,https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/iphone-11-4.jpg,https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/iphone-11-5.jpg,",
          description:
            "Lorem ipsum",
          specification:
            "Lorem ipsum",
          payment: "TPbank, Visa",
          product_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          color: "Blue , Gray",
          image: "https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/iphone-11-1.jpg,https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/iphone-11-2.jpg,https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/iphone-11-3.jpg,https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/iphone-11-4.jpg,https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/iphone-11-5.jpg,",
          description:
            "Lorem ipsum",
          specification:
            "Lorem ipsum",
          payment: "TPbank, Visa",
          product_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          color: "Blue , Gray",
          image: "https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/iphone-11-1.jpg,https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/iphone-11-2.jpg,https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/iphone-11-3.jpg,https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/iphone-11-4.jpg,https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/iphone-11-5.jpg,",
          description:
            "Lorem ipsum",
          specification:
            "Lorem ipsum",
          payment: "TPbank, Visa",
          product_id: 6,
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

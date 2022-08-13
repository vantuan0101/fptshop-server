"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     * path : "",
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Catelogies",
      [
        {
          name: "Điện thoại",
          path : "dien-thoai",
          createdAt: new Date(),
          updatedAt: new Date(),
          catelogy:
            '[{"name": "HÃNG SẢN XUẤT","details": [{"name" : "Apple (iPhone)" , "path":"apple-iphone"},{"name" :"Samsung","path":"samsung"},{"name" : "OPPO" ,"path" : "oppo"},{"name" : "Xiaomi" ,"path" : "xiaomi"},{"name":"Vivo","path":"vivo"},{"name":"Tecno","path":"tecno"},{"name":"Nokia","path":"nokia"},{"name":"Asus","path":"asus"},{"name":"Masstel" ,"path":"masstel"},{"name" :"Realme" ,"path":"realme"}]},{"name": "ĐỒNG HỒ THÔNG MINH","details": [{"name" :"Apple Watch" ,"path":"apple-watch"},{"name":"Samsung","path":"samsung"},{"name":"Oppo","path":"oppo"},{"name":"Masstel","path":"masstel"},{"name":"Xiaomi","path":"xiaomi"},{"name":"Garmin","path":"garmin"},{"name":"Huawei","path":"huawei"}]}]',
          imageIcon : "https://fptshop-server.herokuapp.com/public/images/catelogies/icon-mobile.webp"
        },
        {
          name: "Laptop",
          path : "laptop",
          catelogy:
            '[{"name": "HÃNG SẢN XUẤT","details": [{"name":"Apple (MacBook)","path":"apple-macbook"},{"name":"Asus","path":"asus"},{"name":"HP","path":"hp"},{"name":"Acer","path":"acer"},{"name":"MSI","path":"msi"},{"name":"Lenovo","path":"lenovo"},{"name":"Dell","path":"dell"},{"name":"Microsoft (Surface)","path":"microsoft-surface"},{"name":"Gigabyte","path":"gigabyte"},{"name":"Fujitsu"},{"name":"Chuwi"},{"name":"Avita"},{"name":"Masstel"}]},{"name": "Phần Mềm","details": [{"name":"Diệt Virus"},{"name":"Microsoft Office"},{"name":"Windows"},{"name":"Phần mềm khác"}]}]',
          createdAt: new Date(),
          updatedAt: new Date(),
          imageIcon : "https://fptshop-server.herokuapp.com/public/images/catelogies/icon-laptop.webp"

        },
        {
          name: "PC - Lắp ráp",
          path : "desktops",
          catelogy:
            '[{"name": "","details": [{"name":"PC","path":"desktops"},{"name":"Linh kiện","path":"desktops"}]]',
          createdAt: new Date(),
          updatedAt: new Date(),
          imageIcon : "https://fptshop-server.herokuapp.com/public/images/catelogies/icon-pc.webp"

        },
        {
          name: "Máy tính bảng",
          path : "may-tinh-bang",
          catelogy:
            '[{"name": "HÃNG SẢN XUẤT","details": [{"name":"Apple (iPad)","path":"apple-ipad"},{"name":"Samsung","path":"samsung"},{"name":"Masstel","path":"masstel"},{"name":"Lenovo","path":"lenovo"},{"name":"Xiaomi","path":"xiaomi"},{"name":"Coolpad"},{"name":"Nexta"}]}]',
          createdAt: new Date(),
          updatedAt: new Date(),
          imageIcon : "https://fptshop-server.herokuapp.com/public/images/catelogies/icon-tablet.webp"

        },
        {
          name: "Thiết bị thông minh",
          path : "thiet-bi-thong-minh",

          createdAt: new Date(),
          imageIcon : "https://fptshop-server.herokuapp.com/public/images/catelogies/icon-smart.webp",

          updatedAt: new Date(),
        },
        {
          name: "Gia dụng",
          path : "gia-dung",

          createdAt: new Date(),
          updatedAt: new Date(),
          imageIcon : "https://fptshop-server.herokuapp.com/public/images/catelogies/icon-houseware.webp"

        },
        {
          name: "Apple",
          path : "apple",
          catelogy:
            '[{"name": "CÁC SẢN PHẨM APPLE","details": [{"name":"iPhone","path":"apple-iphone"},{"name":"iPad","path":"apple-ipad"},{"name":"MacBook","path":"apple-macbook"},{"name":"Apple Watch","path":"apple-watch"},{"name":"Apple Tai nghe"},{"name":"iMac"},{"name":"Mac Mini"},{"name":"Sạc & Cáp"},{"name":"Ốp lưng & Bao da"},{"name":"Apple TV"},{"name":"Chuột & Trackpad"},{"name":"Bàn phím"},{"name":"AirTag"},{"name":"Hàng dự án"}]}]',

          createdAt: new Date(),
          updatedAt: new Date(),
          imageIcon : "https://fptshop-server.herokuapp.com/public/images/catelogies/icon-apple.webp"

        },
        {
          name: "Samsung",
          path : "samsung",

          createdAt: new Date(),
          updatedAt: new Date(),
          imageIcon : "https://fptshop-server.herokuapp.com/public/images/catelogies/icon-samsung.webp"

        },
        {
          name: "Đồng hồ thông minh",
          path : "dong-ho-thong-minh",

          createdAt: new Date(),
          updatedAt: new Date(),
          imageIcon : "https://fptshop-server.herokuapp.com/public/images/catelogies/icon-smartwatch.webp"

        },
        {
          name: "Phụ kiện",
          path : "phu-kien",
          catelogy:
            '[{"name": "CÁC SẢN PHẨM PHỤ KIỆN","details": [{"name":"Router"},{"name":"Bao da ốp lưng"},{"name":"Sạc dự phòng"},{"name":"Thẻ nhớ"},{"name":"Phụ kiện Apple"},{"name":"Miếng dán màn hình"},{"name":"Loa"},{"name":"USB - Ổ cứng"},{"name":"Sạc cáp"},{"name":"Tai nghe"},{"name":"Chuột"},{"name":"Bàn ghế gaming"},{"name":"Balo - Túi xách"},{"name":"TV BOX"},{"name":"Phụ kiện khác"},{"name":"Phụ kiện khẩu trang lọc khí"},{"name":"Bàn phím"}]}]',

          createdAt: new Date(),
          updatedAt: new Date(),
          imageIcon : "https://fptshop-server.herokuapp.com/public/images/catelogies/icon-accessories.webp"

        },
        {
          name: "Màn hình",
          path : "man-hinh",

          createdAt: new Date(),
          updatedAt: new Date(),
          imageIcon : "https://fptshop-server.herokuapp.com/public/images/catelogies/icon-screen.webp"

        },
        {
          name: "Máy cũ",
          path : "may-cu",

          createdAt: new Date(),
          updatedAt: new Date(),
          imageIcon : "https://fptshop-server.herokuapp.com/public/images/catelogies/icon-tcdm.webp"

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
     * await queryInterface.bulkDelete('People', '''', {});
     */
    await queryInterface.bulkDelete("Catelogies", null, {});
  },
};

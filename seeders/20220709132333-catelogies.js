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
      "Catelogies",
      [
        {
          name: "Điện thoại",
          createdAt: new Date(),
          updatedAt: new Date(),
          catelogy:
            '[{"name": "HÃNG SẢN XUẤT","details": ["Apple (iPhone)","Samsung","OPPO","Xiaomi","Vivo","Tecno","Nokia","Asus","Masstel","Realme"]},{"name": "ĐỒNG HỒ THÔNG MINH","details": ["Apple Watch","Samsung","Oppo","Masstel","Xiaomi","Garmin","Huawei"]}]',
        },
        {
          name: "Laptop",
          catelogy:
            '[{"name": "HÃNG SẢN XUẤT","details": ["Apple (MacBook)","Asus","HP","Acer","MSI","Lenovo","Dell","Microsoft (Surface)","Gigabyte","Fujitsu","Chuwi","Avita","Masstel"]},{"name": "Phần Mềm","details": ["Diệt Virus","Microsoft Office","Windows","Phần mềm khác"]}]',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Máy tính bảng",
          catelogy:
            '[{"name": "HÃNG SẢN XUẤT","details": ["Apple (iPad)","Samsung","Masstel","Lenovo","Xiaomi","Coolpad","Nexta"]}]',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Thiết bị thông minh",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Gia dụng",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Apple",
          catelogy:
            '[{"name": "CÁC SẢN PHẨM APPLE","details": ["iPhone","iPad","MacBook","Apple Watch","Apple Tai nghe","iMac","Mac Mini","Sạc & Cáp","Ốp lưng & Bao da","Apple TV","Chuột & Trackpad","Bàn phím","AirTag","Hàng dự án"]}]',

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Samsung",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Đồng hồ thông minh",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Phụ kiện",
          catelogy:
            '[{"name": "CÁC SẢN PHẨM PHỤ KIỆN","details": ["Router","Bao da ốp lưng","Sạc dự phòng","Thẻ nhớ","Phụ kiện Apple","Miếng dán màn hình","Loa","USB - Ổ cứng","Sạc cáp","Tai nghe","Chuột","Bàn ghế gaming","Balo - Túi xách","TV BOX","Phụ kiện khác","Phụ kiện khẩu trang lọc khí","Bàn phím"]}]',

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Màn hình",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Máy cũ",

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
     * await queryInterface.bulkDelete('People', '''', {});
     */
    await queryInterface.bulkDelete("Catelogies", null, {});
  },
};

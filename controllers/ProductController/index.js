const {
  getAllPhone,
  getPhoneById,
  createPhoneProduct,
  updatePhoneProduct,
  deletePhoneProduct,
} = require("./Phones");
const {
  getAllTablet,
  getTabletById,
  createTabletProduct,
  updateTabletProduct,
  deleteTabletProduct,
} = require("./Tablet");

const {
  getAllLaptop,
  getLaptopById,
  createLaptopProduct,
  updateLaptopProduct,
  deleteLaptopProduct,
} = require("./Laptop");

const {
  getAllDesktop,
  getDesktopById,
  createDesktopProduct,
  updateDesktopProduct,
  deleteDesktopProduct,
} = require("./Desktop");
const {
  getAllAccessories,
  getAccessoriesById,
  createAccessoriesProduct,
  updateAccessoriesProduct,
  deleteAccessoriesProduct,
} = require("./Accessories");

const {
  searchProduct,
  getHotPhone,
  getHotLaptop,
} = require("./MoreController");
module.exports = {
  // Phones
  getAllPhone,
  getPhoneById,
  createPhoneProduct,
  updatePhoneProduct,
  deletePhoneProduct,
  // Tablets
  getAllTablet,
  getTabletById,
  createTabletProduct,
  updateTabletProduct,
  deleteTabletProduct,
  // Laptops
  getAllLaptop,
  getLaptopById,
  createLaptopProduct,
  updateLaptopProduct,
  deleteLaptopProduct,
  // Desktops
  getAllDesktop,
  getDesktopById,
  createDesktopProduct,
  updateDesktopProduct,
  deleteDesktopProduct,
  // Accessories
  getAllAccessories,
  getAccessoriesById,
  createAccessoriesProduct,
  updateAccessoriesProduct,
  deleteAccessoriesProduct,
  // More
  searchProduct,
  getHotPhone,
  getHotLaptop,
};

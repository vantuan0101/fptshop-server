const {
  getAllPhone,
  getPhoneById,
  createPhoneProduct,
  updatePhoneProduct,
  deletePhoneProduct,
  deleteImagePhone,
  updateImagePhone
  
} = require("./Phones");
const {
  getAllTablet,
  getTabletById,
  createTabletProduct,
  updateTabletProduct,
  deleteTabletProduct,
  deleteImageTablet,
  updateImageTablet
} = require("./Tablet");

const {
  getAllLaptop,
  getLaptopById,
  createLaptopProduct,
  updateLaptopProduct,
  deleteLaptopProduct,
  deleteImageLaptop,
  updateImageLaptop
} = require("./Laptop");

const {
  getAllDesktop,
  getDesktopById,
  createDesktopProduct,
  updateDesktopProduct,
  deleteDesktopProduct,
  deleteImageDesktop,
  updateImageDesktop
} = require("./Desktop");
const {
  getAllAccessories,
  getAccessoriesById,
  createAccessoriesProduct,
  updateAccessoriesProduct,
  deleteAccessoriesProduct,
  deleteImageAccessories,
  updateImageAccessories
} = require("./Accessories");

const {
  searchProduct,
  getHotPhone,
  getHotLaptop,
  getHotTablet,
  getHotDesktop
} = require("./MoreController");
module.exports = {
  // Phones
  getAllPhone,
  getPhoneById,
  createPhoneProduct,
  updatePhoneProduct,
  deletePhoneProduct,
  deleteImagePhone,
  updateImagePhone,
  // Tablets
  getAllTablet,
  getTabletById,
  createTabletProduct,
  updateTabletProduct,
  deleteTabletProduct,
  deleteImageTablet,
  updateImageTablet,
  // Laptops
  getAllLaptop,
  getLaptopById,
  createLaptopProduct,
  updateLaptopProduct,
  deleteLaptopProduct,
  deleteImageLaptop,
  updateImageLaptop,
  // Desktops
  getAllDesktop,
  getDesktopById,
  createDesktopProduct,
  updateDesktopProduct,
  deleteDesktopProduct,
  deleteImageDesktop,
  updateImageDesktop,
  // Accessories
  getAllAccessories,
  getAccessoriesById,
  createAccessoriesProduct,
  updateAccessoriesProduct,
  deleteAccessoriesProduct,
  deleteImageAccessories,
  updateImageAccessories,
  // More
  searchProduct,
  getHotPhone,
  getHotLaptop,
  getHotTablet,
  getHotDesktop
};

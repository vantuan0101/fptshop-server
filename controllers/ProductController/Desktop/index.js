const {
  returnGetAllProduct,
  returnCreateProduct,
  returnGetProduct,
  returnUpdateProduct,
  returnDeleteProduct,
} = require("../../../Utils/ProductsServices");
const { Desktops, BrandDesktops } = require("../../../models");
// Get Desktop products
const getAllDesktop = returnGetAllProduct(BrandDesktops, Desktops);
const getDesktopById = returnGetProduct(Desktops);

// Create Product
const createDesktopProduct = returnCreateProduct(Desktops);

// Update Desktop Product
const updateDesktopProduct = returnUpdateProduct(Desktops);

// Delete Desktop Product
const deleteDesktopProduct = returnDeleteProduct(Desktops);

module.exports = {
  getAllDesktop,
  getDesktopById,
  createDesktopProduct,
  updateDesktopProduct,
  deleteDesktopProduct,
};

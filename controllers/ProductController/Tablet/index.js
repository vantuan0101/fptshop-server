const {
  returnGetAllProduct,
  returnCreateProduct,
  returnGetProduct,
  returnUpdateProduct,
  returnDeleteProduct,
} = require("../../../Utils/ProductsServices");
const { Laptops, BrandLaptops } = require("../../../models");
// Get Tablet products
const getAllTablet = returnGetAllProduct(BrandLaptops, Laptops);
const getTabletById = returnGetProduct(Laptops);

// Create Product
const createTabletProduct = returnCreateProduct(Laptops);

// Update Tablet Product
const updateTabletProduct = returnUpdateProduct(Laptops);

// Delete Tablet Product
const deleteTabletProduct = returnDeleteProduct(Laptops);

module.exports = {
  getAllTablet,
  getTabletById,
  createTabletProduct,
  updateTabletProduct,
  deleteTabletProduct,
};

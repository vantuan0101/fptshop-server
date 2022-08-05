const {
  returnGetAllProduct,
  returnCreateProduct,
  returnGetProduct,
  returnUpdateProduct,
  returnDeleteProduct,
} = require("../../../Utils/ProductsServices");
const { Tablets, BrandTablets } = require("../../../models");
// Get Tablet products
const getAllTablet = returnGetAllProduct(BrandTablets, Tablets);
const getTabletById = returnGetProduct(Tablets);

// Create Product
const createTabletProduct = returnCreateProduct(Tablets);

// Update Tablet Product
const updateTabletProduct = returnUpdateProduct(Tablets);

// Delete Tablet Product
const deleteTabletProduct = returnDeleteProduct(Tablets);

module.exports = {
  getAllTablet,
  getTabletById,
  createTabletProduct,
  updateTabletProduct,
  deleteTabletProduct,
};

const {
  returnGetAllProduct,
  returnCreateProduct,
  returnGetProduct,
  returnUpdateProduct,
  returnDeleteProduct,
} = require("../../../Utils/ProductsServices");
const { Accessories, BrandAccessories } = require("../../../models");
// Get Accessories products
const getAllAccessories = returnGetAllProduct(BrandAccessories, Accessories);
const getAccessoriesById = returnGetProduct(Accessories);

// Create Product
const createAccessoriesProduct = returnCreateProduct(Accessories);

// Update Accessories Product
const updateAccessoriesProduct = returnUpdateProduct(Accessories);

// Delete Accessories Product
const deleteAccessoriesProduct = returnDeleteProduct(Accessories);

module.exports = {
  getAllAccessories,
  getAccessoriesById,
  createAccessoriesProduct,
  updateAccessoriesProduct,
  deleteAccessoriesProduct,
};

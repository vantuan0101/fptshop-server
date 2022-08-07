const {
  returnGetAllProduct,
  returnCreateProduct,
  returnGetProduct,
  returnUpdateProduct,
  returnDeleteProduct,
} = require("../../../Utils/ProductsServices");
const { Tablets, BrandTablets } = require("../../../models");
const { handleUpdateImage } = require("../../../middlewares/services/updateImage");
const { handleDeleteImage } = require("../../../middlewares/services/deleteImage");
// Get Tablet products
const getAllTablet = returnGetAllProduct(BrandTablets, Tablets);
const getTabletById = returnGetProduct(Tablets);

// Create Product
const createTabletProduct = returnCreateProduct(Tablets);

// Update Tablet Product
const updateTabletProduct = returnUpdateProduct(Tablets);
const updateImageTablet = handleUpdateImage(Tablets);

// Delete Tablet Product
const deleteTabletProduct = returnDeleteProduct(Tablets);
const deleteImageTablet = handleDeleteImage(Tablets);
module.exports = {
  getAllTablet,
  getTabletById,
  createTabletProduct,
  updateTabletProduct,
  updateImageTablet,
  deleteTabletProduct,
  deleteImageTablet,
};

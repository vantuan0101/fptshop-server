const {
  returnGetAllProduct,
  returnCreateProduct,
  returnGetProduct,
  returnUpdateProduct,
  returnDeleteProduct,
} = require("../../../Utils/ProductsServices");
const { Accessories, BrandAccessories } = require("../../../models");
const { handleUpdateImage } = require("../../../middlewares/services/updateImage");
const { handleDeleteImage } = require("../../../middlewares/services/deleteImage");
// Get Accessories products
const getAllAccessories = returnGetAllProduct(BrandAccessories, Accessories);
const getAccessoriesById = returnGetProduct(Accessories);

// Create Product
const createAccessoriesProduct = returnCreateProduct(Accessories);

// Update Accessories Product
const updateAccessoriesProduct = returnUpdateProduct(Accessories);

// Delete Accessories Product
const deleteAccessoriesProduct = returnDeleteProduct(Accessories);
const updateImageAccessories = handleUpdateImage(Accessories);
const deleteImageAccessories = handleDeleteImage(Accessories);
module.exports = {
  getAllAccessories,
  getAccessoriesById,
  createAccessoriesProduct,
  updateAccessoriesProduct,
  updateImageAccessories,
  deleteAccessoriesProduct,
  deleteImageAccessories
};

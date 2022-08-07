const { handleDeleteImage } = require("../../../middlewares/services/deleteImage");
const { handleUpdateImage } = require("../../../middlewares/services/updateImage");
const { BrandPhones, Phones } = require("../../../models");
const {
  returnGetAllProduct,
  returnCreateProduct,
  returnGetProduct,
  returnUpdateProduct,
  returnDeleteProduct,
} = require("../../../Utils/ProductsServices");

// Get Phone products
const getAllPhone = returnGetAllProduct(BrandPhones, Phones);
const getPhoneById = returnGetProduct(Phones);

// Create Product
const createPhoneProduct = returnCreateProduct(Phones);

// Update Phone Product
const updatePhoneProduct = returnUpdateProduct(Phones);
const updateImagePhone = handleUpdateImage(Phones);
// Delete Phone Product
const deletePhoneProduct = returnDeleteProduct(Phones);
const deleteImagePhone = handleDeleteImage(Phones);
module.exports = {
  getAllPhone,
  getPhoneById,
  createPhoneProduct,
  updatePhoneProduct,
  deletePhoneProduct,
  deleteImagePhone,
  updateImagePhone
};

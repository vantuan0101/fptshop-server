const {
  returnGetAllProduct,
  returnCreateProduct,
  returnGetProduct,
  returnUpdateProduct,
  returnDeleteProduct,
} = require("../../../Utils/ProductsServices");
const { Desktops, BrandDesktops } = require("../../../models");
const { handleUpdateImage } = require("../../../middlewares/services/updateImage");
const { handleDeleteImage } = require("../../../middlewares/services/deleteImage");
// Get Desktop products
const getAllDesktop = returnGetAllProduct(BrandDesktops, Desktops);
const getDesktopById = returnGetProduct(Desktops);

// Create Product
const createDesktopProduct = returnCreateProduct(Desktops);

// Update Desktop Product
const updateDesktopProduct = returnUpdateProduct(Desktops);
const updateImageDesktop = handleUpdateImage(Desktops);

// Delete Desktop Product
const deleteDesktopProduct = returnDeleteProduct(Desktops);
const deleteImageDesktop = handleDeleteImage(Desktops);
module.exports = {
  getAllDesktop,
  getDesktopById,
  createDesktopProduct,
  updateDesktopProduct,
  updateImageDesktop,
  deleteDesktopProduct,
  deleteImageDesktop,
};

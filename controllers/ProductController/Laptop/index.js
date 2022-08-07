const { handleDeleteImage } = require("../../../middlewares/services/deleteImage");
const { handleUpdateImage } = require("../../../middlewares/services/updateImage");
const { BrandLaptops, Laptops } = require("../../../models");
const {
  returnGetAllProduct,
  returnCreateProduct,
  returnGetProduct,
  returnUpdateProduct,
  returnDeleteProduct,
} = require("../../../Utils/ProductsServices");

// Get Laptop products
const getAllLaptop = returnGetAllProduct(BrandLaptops, Laptops);
const getLaptopById = returnGetProduct(Laptops);

// Create Product
const createLaptopProduct = returnCreateProduct(Laptops);

// Update Laptop Product
const updateLaptopProduct = returnUpdateProduct(Laptops);
const updateImageLaptop = handleUpdateImage(Laptops);

// Delete Laptop Product
const deleteLaptopProduct = returnDeleteProduct(Laptops);
const deleteImageLaptop = handleDeleteImage(Laptops);
module.exports = {
  getAllLaptop,
  getLaptopById,
  createLaptopProduct,
  updateLaptopProduct,
  deleteLaptopProduct,
  updateImageLaptop,
  deleteImageLaptop
};

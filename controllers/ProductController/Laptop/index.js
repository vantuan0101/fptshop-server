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

// Delete Laptop Product
const deleteLaptopProduct = returnDeleteProduct(Laptops);

module.exports = {
  getAllLaptop,
  getLaptopById,
  createLaptopProduct,
  updateLaptopProduct,
  deleteLaptopProduct,
};

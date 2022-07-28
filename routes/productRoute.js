const express = require("express");
const {
  createPhoneProduct,
  getPhoneProducts,
  getLaptopProducts,
  getTabletProducts,
  getDesktopProducts,
  getAccessoriesProducts,
  getProduct,
  searchProduct,
  getHotPhone,
  getHotLaptop,
} = require("../controllers/productController");
const { filterProduct } = require("../middlewares/filterProduct/filterProduct");
const { uploadImage } = require("../middlewares/upload/uploadImage");

const productsRouter = express.Router();

productsRouter.get("/dien-thoai-hot", getHotPhone);
productsRouter.get("/laptop-hot", getHotLaptop);

// Get Products By Category
productsRouter.get("/dien-thoai", filterProduct, getPhoneProducts);
productsRouter.get("/laptop", filterProduct, getLaptopProducts);
productsRouter.get("/may-tinh-bang", filterProduct, getTabletProducts);
productsRouter.get("/desktop", filterProduct, getDesktopProducts);
productsRouter.get("/phu-kien", filterProduct, getAccessoriesProducts);

productsRouter.route("/tim-kiem").get(searchProduct);
// productsRouter.route("/hot-product").get(getHotProducts)
productsRouter.route("/:id").get(getProduct);
productsRouter.route("/").post(uploadImage('products'),createPhoneProduct);

module.exports = { productsRouter };

const {
  getHotPhone,
  getHotLaptop,
  searchProduct,
} = require("../../../controllers/productController");

const moreRouter = require("express").Router();

// Get Hot Products
moreRouter.get("/dien-thoai-hot", getHotPhone);
moreRouter.get("/laptop-hot", getHotLaptop);

// Search Product
moreRouter.route("/tim-kiem").get(searchProduct);

module.exports = { moreRouter };

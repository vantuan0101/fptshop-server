const {
  searchProduct,
  getHotPhone,
  getHotLaptop,
  getHotTablet,
  getHotDesktop
} = require("../../../controllers/ProductController");

const moreRouter = require("express").Router();

// Get Hot Products
moreRouter.get("/dien-thoai-hot", getHotPhone);
moreRouter.get("/laptop-hot", getHotLaptop);
moreRouter.get("/may-tinh-bang-hot", getHotTablet);
moreRouter.get("/desktop-hot", getHotDesktop);

// Search Product
moreRouter.route("/tim-kiem").get(searchProduct);

module.exports = { moreRouter };

const express = require("express");
const {createProduct , getProducts ,getProduct , searchProduct , getHotPhone} = require("../controllers/productController");
const {filterProduct} = require('../middlewares/filterProduct/filterProduct')

const productsRouter = express.Router();

productsRouter.get("/dien-thoai",getHotPhone)
productsRouter.get("/laptop",getHotPhone)
productsRouter.get("/may-tinh-bang",getHotPhone)
productsRouter.route("/tim-kiem").get(searchProduct)
// productsRouter.route("/hot-product").get(getHotProducts)
productsRouter.route("/:id").get(getProduct)
productsRouter.route("/").get(filterProduct, getProducts).post(createProduct);


module.exports = { productsRouter };



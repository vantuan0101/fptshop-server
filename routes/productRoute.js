const express = require("express");
const {createProduct , getProducts ,getProduct , searchProduct} = require("../controllers/productController");
const {filterProduct} = require('../middlewares/filterProduct/filterProduct')

const productsRouter = express.Router();

productsRouter.route("/tim-kiem").get(searchProduct)
productsRouter.route("/:id").get(getProduct)
productsRouter.route("/").get(filterProduct, getProducts).post(createProduct);

module.exports = { productsRouter };



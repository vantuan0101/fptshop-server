const express = require("express");
const {createProduct , getProducts ,getProduct} = require("../controllers/productController");
const {filterProduct} = require('../middlewares/filterProduct/filterProduct')

const productsRouter = express.Router();

productsRouter.route("/").get(filterProduct, getProducts).post(createProduct);
productsRouter.route("/:id").get(getProduct)

module.exports = { productsRouter };



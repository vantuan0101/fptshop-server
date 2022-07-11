const express = require("express");
const {createProduct , getProducts ,getProduct} = require("../controllers/productController");


const productsRouter = express.Router();

productsRouter.route("/").get(getProducts).post(createProduct);
productsRouter.route("/:id").get(getProduct)

module.exports = { productsRouter };



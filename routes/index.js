const express = require("express");
const { getFlashSales } = require("../controllers/flashSaleController");
const { catelogiesRouter } = require("./catelogiesRoute");
const { productsRouter } = require("./productRoute");
const rootRouter = express.Router();

rootRouter.use("/catelogies", catelogiesRouter);
rootRouter.use("/products", productsRouter);
rootRouter.get("/flash-sale",getFlashSales)

module.exports = { rootRouter };

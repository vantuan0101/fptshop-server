const express = require("express");
const { catelogiesRouter } = require("./catelogiesRoute");
const { productsRouter } = require("./productRoute");
const rootRouter = express.Router();

rootRouter.use("/catelogies", catelogiesRouter);
rootRouter.use("/products", productsRouter);

module.exports = { rootRouter };

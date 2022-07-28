const express = require("express");
const { getHotSales} = require("../controllers/flashSaleController");
const { catelogiesRouter } = require("./catelogiesRoute");
const { productsRouter } = require("./productRoute");
const { userRouter } = require("./userRoute");
const rootRouter = express.Router();

rootRouter.use("/catelogies", catelogiesRouter);
rootRouter.use("/products", productsRouter);
rootRouter.use("/users", userRouter);


rootRouter.get("/hot-sale",getHotSales)



module.exports = { rootRouter };

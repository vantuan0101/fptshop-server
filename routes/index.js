const express = require("express");
const { getHotSales } = require("../controllers/flashSaleController");
const { catelogiesRouter } = require("./catelogiesRoute");
const { productRouter } = require("./productRoute");
const { userRouter } = require("./userRoute");
const { brandRouter } = require("./brandRoute");

const rootRouter = express.Router();

// rootRouter.use("/catelogies", catelogiesRouter);
rootRouter.use("/", catelogiesRouter);
rootRouter.use("/", productRouter);
rootRouter.use("/", userRouter);
rootRouter.use("/", brandRouter);
// rootRouter.use("/users", userRouter);

rootRouter.get("/hot-sale", getHotSales);

module.exports = { rootRouter };

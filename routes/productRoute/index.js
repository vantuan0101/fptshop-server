const { phoneRouter } = require("./phoneRoute");
const { tabletRouter } = require("./tabletRoute");
const { moreRouter } = require("./moreRoute");
const { laptopRouter } = require("./laptopRoute");
const { desktopRouter } = require("./desktopRoute");
const { accessoriesRouter } = require("./accessoriesRoute");

const productRouter = require("express").Router();

productRouter.use("/products", phoneRouter);
productRouter.use("/products", tabletRouter);
productRouter.use("/products", moreRouter);
productRouter.use("/products", laptopRouter);
productRouter.use("/products", desktopRouter);
productRouter.use("/products", accessoriesRouter);

module.exports = { productRouter };

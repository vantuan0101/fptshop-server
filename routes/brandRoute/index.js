const { phoneRouter } = require("./phoneRoute");
const { tabletRouter } = require("./tabletRoute");
const { desktopRouter } = require("./desktopRoute");
const { laptopRouter } = require("./laptopRoute");
const { accessoriesRouter } = require("./accessoriesRoute");
const brandRouter = require("express").Router();

brandRouter.use("/brands", phoneRouter);
brandRouter.use("/brands", tabletRouter);
brandRouter.use("/brands", desktopRouter);
brandRouter.use("/brands", laptopRouter);
brandRouter.use("/brands", accessoriesRouter);

module.exports = { brandRouter };

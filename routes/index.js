const express = require("express");
const { catelogiesRouter } = require("./catelogiesRoute");
const rootRouter = express.Router();

rootRouter.use("/catelogies", catelogiesRouter);

module.exports = { rootRouter };

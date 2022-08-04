const { phoneRouter } = require("./phoneRoute");
const brandRouter = require("express").Router();

brandRouter.use("/brands", phoneRouter);

module.exports = { brandRouter };

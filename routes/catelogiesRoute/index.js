const {
  getCatelogyDetails,
  createCatelogy,
} = require("../../controllers/catelogiesController");

const catelogiesRouter = require("express").Router();

catelogiesRouter
  .route("/catelogies")
  .get(getCatelogyDetails)
  .post(createCatelogy);
module.exports = { catelogiesRouter };

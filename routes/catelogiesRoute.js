const express = require("express");
const {
  createCatelogy,
  getCatelogyDetails,
} = require("../controllers/catelogiesController");
const catelogiesRouter = express.Router();

catelogiesRouter.route("/").get(getCatelogyDetails).post(createCatelogy);
module.exports = { catelogiesRouter };

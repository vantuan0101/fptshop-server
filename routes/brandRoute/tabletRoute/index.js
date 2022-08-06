const {
  createTabletBrand,
  updateTabletBrand,
  deleteTabletBrand,
  getAllTabletBrand,
  getOneTabletBrand,
} = require("../../../controllers/BrandController");

const tabletRouter = require("express").Router();

tabletRouter
  .route("/may-tinh-bang")
  .post(createTabletBrand)
  .get(getAllTabletBrand);
tabletRouter
  .route("/may-tinh-bang/:name")
  .get(getOneTabletBrand)
  .patch(updateTabletBrand)
  .delete(deleteTabletBrand);

module.exports = { tabletRouter };

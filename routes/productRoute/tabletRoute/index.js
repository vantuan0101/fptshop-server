const {
  getAllTablet,
  getTabletById,
} = require("../../../controllers/productController");
const {
  filterProduct,
} = require("../../../middlewares/filterProduct/filterProduct");

const tabletRouter = require("express").Router();
tabletRouter.get("/may-tinh-bang", filterProduct, getAllTablet);
tabletRouter.route("/may-tinh-bang/:id").get(getTabletById);

module.exports = { tabletRouter };

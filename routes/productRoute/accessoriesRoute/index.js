const {
  getAllAccessories,
  getAccessoriesById,
} = require("../../../controllers/productController");
const {
  filterProduct,
} = require("../../../middlewares/filterProduct/filterProduct");

const accessoriesRouter = require("express").Router();

accessoriesRouter.get("/phu-kien", filterProduct, getAllAccessories);
accessoriesRouter.route("/phu-kien/:id").get(getAccessoriesById);

module.exports = { accessoriesRouter };

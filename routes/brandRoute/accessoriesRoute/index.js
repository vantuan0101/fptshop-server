const {
  createAccessoriesBrand,
  updateAccessoriesBrand,
  deleteAccessoriesBrand,
  getAllAccessoriesBrand,
  getOneAccessoriesBrand,
} = require("../../../controllers/BrandController");

const accessoriesRouter = require("express").Router();

accessoriesRouter
  .route("/phu-kien")
  .post(createAccessoriesBrand)
  .get(getAllAccessoriesBrand);
accessoriesRouter
  .route("/phu-kien/:id")
  .get(getOneAccessoriesBrand)
  .patch(updateAccessoriesBrand)
  .delete(deleteAccessoriesBrand);

module.exports = { accessoriesRouter };

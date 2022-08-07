const {
  createLaptopBrand,
  updateLaptopBrand,
  deleteLaptopBrand,
  getAllLaptopBrand,
  getOneLaptopBrand,
} = require("../../../controllers/BrandController");

const laptopRouter = require("express").Router();

laptopRouter
  .route("/laptop")
  .post(createLaptopBrand)
  .get(getAllLaptopBrand);
laptopRouter
  .route("/laptop/:name")
  .get(getOneLaptopBrand)
  .patch(updateLaptopBrand)
  .delete(deleteLaptopBrand);

module.exports = { laptopRouter };

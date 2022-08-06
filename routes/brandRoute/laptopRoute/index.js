const {
  createLaptopBrand,
  updateLaptopBrand,
  deleteLaptopBrand,
  getAllLaptopBrand,
  getOneLaptopBrand,
} = require("../../../controllers/BrandController");

const laptopRouter = require("express").Router();

laptopRouter
  .route("/laptops")
  .post(createLaptopBrand)
  .get(getAllLaptopBrand);
laptopRouter
  .route("/laptops/:name")
  .get(getOneLaptopBrand)
  .patch(updateLaptopBrand)
  .delete(deleteLaptopBrand);

module.exports = { laptopRouter };

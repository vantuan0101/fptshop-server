const {
  getAllLaptop,
  getLaptopById,
} = require("../../../controllers/ProductController");
const {
  filterProduct,
} = require("../../../middlewares/filterProduct/filterProduct");

const laptopRouter = require("express").Router();

laptopRouter.get("/laptop", filterProduct, getAllLaptop);
laptopRouter.route("/laptop/:id").get(getLaptopById);

module.exports = { laptopRouter };

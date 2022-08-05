const {
  getAllLaptop,
  getLaptopById,
  createLaptopProduct,
  updateLaptopProduct,
  deleteLaptopProduct,
} = require("../../../controllers/ProductController");
const {
  filterProduct,
} = require("../../../middlewares/filterProduct/filterProduct");
const { uploadImage } = require("../../../middlewares/upload/uploadImage");

const laptopRouter = require("express").Router();

laptopRouter
  .get("/laptop", filterProduct, getAllLaptop)
  .post(
    uploadImage("products/laptops", [
      { name: "thumbnail" },
      { name: "image", maxCount: 12 },
    ]),
    createLaptopProduct
  );
laptopRouter
  .route("/laptop/:id")
  .get(getLaptopById)
  .patch(
    uploadImage("products/laptops", [
      { name: "thumbnail" },
      { name: "image", maxCount: 12 },
    ]),
    updateLaptopProduct
  )
  .delete(deleteLaptopProduct);

module.exports = { laptopRouter };

const {
  getAllLaptop,
  getLaptopById,
  createLaptopProduct,
  updateLaptopProduct,
  deleteLaptopProduct,
  deleteImageLaptop,
  updateImageLaptop,
} = require("../../../controllers/ProductController");
const {
  filterProduct,
} = require("../../../middlewares/filterProduct/filterProduct");
const { uploadImage } = require("../../../middlewares/upload/uploadImage");

const laptopRouter = require("express").Router();

laptopRouter
  .route("/laptop/:id")
  .get(getLaptopById)
  .patch(
    uploadImage("products/laptops", [
      { name: "thumbnail" },
      { name: "image", maxCount: 12 },
    ]),
    updateImageLaptop,
    updateLaptopProduct
  )
  .delete(deleteImageLaptop, deleteLaptopProduct);
laptopRouter
  .route("/laptop")
  .get(filterProduct, getAllLaptop)
  .post(
    uploadImage("products/laptops", [
      { name: "thumbnail" },
      { name: "image", maxCount: 12 },
    ]),
    createLaptopProduct
  );
module.exports = { laptopRouter };

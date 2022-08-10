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
const { uploadImageCloud } = require("../../../middlewares/upload/uploadCloud");
const { uploadImage } = require("../../../middlewares/upload/uploadImage");

const laptopRouter = require("express").Router();

laptopRouter
  .route("/laptop/:id")
  .get(getLaptopById)
  .patch(
    uploadImageCloud([{ name: "thumbnail" }, { name: "image", maxCount: 12 }]),
    updateImageLaptop,
    updateLaptopProduct
  )
  .delete(deleteImageLaptop, deleteLaptopProduct);
laptopRouter
  .route("/laptop")
  .get(filterProduct, getAllLaptop)
  .post(
    uploadImageCloud([{ name: "thumbnail" }, { name: "image", maxCount: 12 }]),

    createLaptopProduct
  );
module.exports = { laptopRouter };

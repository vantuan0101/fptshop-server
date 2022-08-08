const {
  getAllTablet,
  getTabletById,
  createTabletProduct,
  updateTabletProduct,
  deleteTabletProduct,
  deleteImageTablet,
  updateImageTablet,
} = require("../../../controllers/ProductController");
const {
  filterProduct,
} = require("../../../middlewares/filterProduct/filterProduct");
const { uploadImage } = require("../../../middlewares/upload/uploadImage");

const tabletRouter = require("express").Router();

tabletRouter
  .route("/may-tinh-bang")
  .get(filterProduct, getAllTablet)
  .post(
    uploadImage("products/tablets", [
      { name: "thumbnail" },
      { name: "image", maxCount: 12 },
    ]),
    createTabletProduct
  );
tabletRouter
  .route("/may-tinh-bang/:id")
  .get(getTabletById)
  .patch(
    uploadImage("products/tablets", [
      { name: "thumbnail" },
      { name: "image", maxCount: 12 },
    ]),
    updateTabletProduct
  )
  .delete(deleteImageTablet, deleteTabletProduct);

module.exports = { tabletRouter };

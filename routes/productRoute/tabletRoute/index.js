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
const { uploadImageCloud } = require("../../../middlewares/upload/uploadCloud");

const tabletRouter = require("express").Router();

tabletRouter
  .route("/may-tinh-bang")
  .get(filterProduct, getAllTablet)
  .post(
    uploadImageCloud([{ name: "thumbnail" }, { name: "image", maxCount: 12 }]),

    createTabletProduct
  );
tabletRouter
  .route("/may-tinh-bang/:id")
  .get(getTabletById)
  .patch(
    uploadImageCloud([{ name: "thumbnail" }, { name: "image", maxCount: 12 }]),
    updateTabletProduct
  )
  .delete(deleteImageTablet, deleteTabletProduct);

module.exports = { tabletRouter };

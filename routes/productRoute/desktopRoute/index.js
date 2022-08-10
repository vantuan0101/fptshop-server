const {
  getAllDesktop,
  getDesktopById,
  createDesktopProduct,
  updateDesktopProduct,
  deleteDesktopProduct,
  deleteImageDesktop,
  updateImageDesktop,
} = require("../../../controllers/ProductController");
const {
  filterProduct,
} = require("../../../middlewares/filterProduct/filterProduct");
const { uploadImageCloud } = require("../../../middlewares/upload/uploadCloud");

const desktopRouter = require("express").Router();

desktopRouter
  .route("/desktops")
  .get(filterProduct, getAllDesktop)
  .post(
    uploadImageCloud([{ name: "thumbnail" }, { name: "image", maxCount: 12 }]),
    createDesktopProduct
  );
desktopRouter
  .route("/desktops/:id")
  .get(getDesktopById)
  .patch(
    uploadImageCloud([{ name: "thumbnail" }, { name: "image", maxCount: 12 }]),
    updateImageDesktop,
    updateDesktopProduct
  )
  .delete(deleteImageDesktop, deleteDesktopProduct);

module.exports = { desktopRouter };

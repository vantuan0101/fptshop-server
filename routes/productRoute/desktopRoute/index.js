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
const { uploadImage } = require("../../../middlewares/upload/uploadImage");

const desktopRouter = require("express").Router();

desktopRouter
  .route("/desktop")
  .get(filterProduct, getAllDesktop)
  .post(
    uploadImage("products/desktops", [
      { name: "thumbnail" },
      { name: "image", maxCount: 12 },
    ]),
    createDesktopProduct
  );
desktopRouter
  .route("/desktop/:id")
  .get(getDesktopById)
  .patch(
    uploadImage("products/desktops", [
      { name: "thumbnail" },
      { name: "image", maxCount: 12 },
    ]),
    updateImageDesktop,
    updateDesktopProduct
  )
  .delete(deleteImageDesktop, deleteDesktopProduct);

module.exports = { desktopRouter };

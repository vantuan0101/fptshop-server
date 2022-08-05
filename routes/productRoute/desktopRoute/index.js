const {
  getAllDesktop,
  getDesktopById,
  createDesktopProduct,
  updateDesktopProduct,
  deleteDesktopProduct,
} = require("../../../controllers/ProductController");
const {
  filterProduct,
} = require("../../../middlewares/filterProduct/filterProduct");
const { uploadImage } = require("../../../middlewares/upload/uploadImage");

const desktopRouter = require("express").Router();

desktopRouter
  .get("/desktop", filterProduct, getAllDesktop)
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
    updateDesktopProduct
  )
  .delete(deleteDesktopProduct);

module.exports = { desktopRouter };

const {
  getAllPhone,
  getPhoneById,
  createPhoneProduct,
  updatePhoneProduct,
} = require("../../../controllers/ProductController");

const {
  filterProduct,
} = require("../../../middlewares/filterProduct/filterProduct");
const { uploadImage } = require("../../../middlewares/upload/uploadImage");

const phoneRouter = require("express").Router();

phoneRouter.get("/dien-thoai", filterProduct, getAllPhone);
phoneRouter
  .route("/dien-thoai/:id")
  .get(getPhoneById)
  .patch(
    uploadImage("products/phones", [
      { name: "thumbnail" },
      { name: "image", maxCount: 12 },
    ]),
    updatePhoneProduct
  );
phoneRouter
  .route("/dien-thoai")
  .post(
    uploadImage("products/phones", [
      { name: "thumbnail" },
      { name: "image", maxCount: 12 },
    ]),
    createPhoneProduct
  );

module.exports = { phoneRouter };

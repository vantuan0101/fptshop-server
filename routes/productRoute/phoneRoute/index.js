const {
  getAllPhone,
  getPhoneById,
  createPhoneProduct,
} = require("../../../controllers/productController");
const {
  filterProduct,
} = require("../../../middlewares/filterProduct/filterProduct");
const { uploadImage } = require("../../../middlewares/upload/uploadImage");

const phoneRouter = require("express").Router();

phoneRouter.get("/dien-thoai", filterProduct, getAllPhone);
phoneRouter.route("/dien-thoai/:id").get(getPhoneById);
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

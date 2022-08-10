const {
  getAllPhone,
  getPhoneById,
  createPhoneProduct,
  updatePhoneProduct,
  deletePhoneProduct,
  deleteImagePhone,
  updateImagePhone,
} = require("../../../controllers/ProductController");

const {
  filterProduct,
} = require("../../../middlewares/filterProduct/filterProduct");
const { uploadImageCloud } = require("../../../middlewares/upload/uploadCloud");

const phoneRouter = require("express").Router();

phoneRouter
  .route("/dien-thoai/:id")
  .get(getPhoneById)
  .patch(
    uploadImageCloud([{ name: "thumbnail" }, { name: "image", maxCount: 12 }]),
    updateImagePhone,
    updatePhoneProduct
  )
  .delete(deleteImagePhone, deletePhoneProduct);
phoneRouter
  .route("/dien-thoai")
  .get(filterProduct, getAllPhone)
  .post(
    // uploadImage("products/phones", [
    //   { name: "thumbnail" },
    //   { name: "image", maxCount: 12 },
    // ]),
    uploadImageCloud([{ name: "thumbnail" }, { name: "image", maxCount: 12 }]),
    createPhoneProduct
  );

module.exports = { phoneRouter };

const {
  getAllAccessories,
  getAccessoriesById,
  createAccessoriesProduct,
  updateAccessoriesProduct,
  deleteAccessoriesProduct,
  deleteImageAccessories,
  updateImageAccessories,
} = require("../../../controllers/ProductController");
const {
  filterProduct,
} = require("../../../middlewares/filterProduct/filterProduct");
const { uploadImageCloud } = require("../../../middlewares/upload/uploadCloud");

const accessoriesRouter = require("express").Router();

accessoriesRouter
  .route("/phu-kien")
  .get(filterProduct, getAllAccessories)
  .post(
    uploadImageCloud([{ name: "thumbnail" }, { name: "image", maxCount: 12 }]),

    createAccessoriesProduct
  );
accessoriesRouter
  .route("/phu-kien/:id")
  .get(getAccessoriesById)
  .patch(
    uploadImageCloud([{ name: "thumbnail" }, { name: "image", maxCount: 12 }]),
    updateImageAccessories,
    updateAccessoriesProduct
  )
  .delete(deleteImageAccessories, deleteAccessoriesProduct);

module.exports = { accessoriesRouter };

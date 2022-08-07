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
const { uploadImage } = require("../../../middlewares/upload/uploadImage");

const accessoriesRouter = require("express").Router();

accessoriesRouter
  .route("/phu-kien")
  .get(filterProduct, getAllAccessories)
  .post(
    uploadImage("products/phu-kien", [
      { name: "thumbnail" },
      { name: "image", maxCount: 12 },
    ]),
    updateImageAccessories,
    createAccessoriesProduct
  );
accessoriesRouter
  .route("/phu-kien/:id")
  .get(getAccessoriesById)
  .patch(
    uploadImage("products/phu-kien", [
      { name: "thumbnail" },
      { name: "image", maxCount: 12 },
    ]),
    updateAccessoriesProduct
  )
  .delete(deleteImageAccessories, deleteAccessoriesProduct);

module.exports = { accessoriesRouter };

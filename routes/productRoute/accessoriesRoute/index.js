const {
  getAllAccessories,
  getAccessoriesById,
  createAccessoriesProduct,
  updateAccessoriesProduct,
  deleteAccessoriesProduct,
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
  .delete(deleteAccessoriesProduct);

module.exports = { accessoriesRouter };

const {
  getCatelogyDetails,
  getOneCatelogy,
  createCatelogy,
  updateCatelogy,
  deleteCatelogy,
} = require("../../controllers/catelogiesController");
const { handleDeleteImage } = require("../../middlewares/services/deleteImage");
const { handleUpdateImage } = require("../../middlewares/services/updateImage");
const { uploadImage } = require("../../middlewares/upload/uploadImage");
const { Catelogies } = require("../../models");
const catelogiesRouter = require("express").Router();

catelogiesRouter
  .route("/catelogies")
  .get(getCatelogyDetails)
  .post(
    uploadImage("products/catelogies", [{ name: "imageIcon" }]),
    createCatelogy
  );
catelogiesRouter
  .route("/catelogies/:id")
  .get(getOneCatelogy)
  .patch(
    uploadImage("products/catelogies", [{ name: "imageIcon" }]),
    // handleUpdateImage(Catelogies),
    updateCatelogy
  )
  .delete(handleDeleteImage(Catelogies), deleteCatelogy);
module.exports = { catelogiesRouter };

const {
  // Phones
  createPhoneBrand,
  updatePhoneBrand,
  deletePhoneBrand,
  getAllPhoneBrand,
  getOnePhoneBrand,
} = require("../../../controllers/BrandController");

const phoneRouter = require("express").Router();

phoneRouter.route("/dien-thoai").post(createPhoneBrand).get(getAllPhoneBrand);
phoneRouter
  .route("/dien-thoai/:id")
  .get(getOnePhoneBrand)
  .patch(updatePhoneBrand)
  .delete(deletePhoneBrand);

module.exports = { phoneRouter };

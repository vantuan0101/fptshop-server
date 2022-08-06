const {
  createDesktopBrand,
  updateDesktopBrand,
  deleteDesktopBrand,
  getAllDesktopBrand,
  getOneDesktopBrand,
} = require("../../../controllers/BrandController");

const desktopRouter = require("express").Router();

desktopRouter
  .route("/desktops")
  .post(createDesktopBrand)
  .get(getAllDesktopBrand);
desktopRouter
  .route("/desktops/:id")
  .get(getOneDesktopBrand)
  .patch(updateDesktopBrand)
  .delete(deleteDesktopBrand);

module.exports = { desktopRouter };

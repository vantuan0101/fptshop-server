const { getDesktopById, getAllDesktop } = require('../../../controllers/productController');
const { filterProduct } = require('../../../middlewares/filterProduct/filterProduct');

const desktopRouter = require('express').Router();

desktopRouter.get("/desktop", filterProduct, getAllDesktop);
desktopRouter.route("/desktop/:id").get(getDesktopById);

module.exports = { desktopRouter };
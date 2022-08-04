const { createPhoneBrand } = require("../../../controllers/brandController");

const phoneRouter = require("express").Router();

phoneRouter.route("/dien-thoai").post(createPhoneBrand);

module.exports = { phoneRouter };

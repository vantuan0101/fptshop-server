const { BrandPhones } = require("../../../models");
const {
  returnCreateBrand,
  returnUpdateBrand,
  returnDeleteBrand,
  returnGetAllBrand,
  returnGetOneBrand,
} = require("../../../Utils/BrandServices.js");
const createPhoneBrand = returnCreateBrand(BrandPhones);
const updatePhoneBrand = returnUpdateBrand(BrandPhones);
const deletePhoneBrand = returnDeleteBrand(BrandPhones);
const getAllPhoneBrand = returnGetAllBrand(BrandPhones);
const getOnePhoneBrand = returnGetOneBrand(BrandPhones);

module.exports = {
  createPhoneBrand,
  updatePhoneBrand,
  deletePhoneBrand,
  getAllPhoneBrand,
  getOnePhoneBrand,
};

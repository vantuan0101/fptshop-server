const { BrandAccessories } = require("../../../models");
const {
  returnCreateBrand,
  returnUpdateBrand,
  returnDeleteBrand,
  returnGetAllBrand,
  returnGetOneBrand,
} = require("../../../Utils/BrandServices.js");
const createAccessoriesBrand = returnCreateBrand(BrandAccessories);
const updateAccessoriesBrand = returnUpdateBrand(BrandAccessories);
const deleteAccessoriesBrand = returnDeleteBrand(BrandAccessories);
const getAllAccessoriesBrand = returnGetAllBrand(BrandAccessories);
const getOneAccessoriesBrand = returnGetOneBrand(BrandAccessories);

module.exports = {
  createAccessoriesBrand,
  updateAccessoriesBrand,
  deleteAccessoriesBrand,
  getAllAccessoriesBrand,
  getOneAccessoriesBrand,
};

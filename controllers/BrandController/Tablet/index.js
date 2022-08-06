const { BrandTablets } = require("../../../models");
const {
  returnCreateBrand,
  returnUpdateBrand,
  returnDeleteBrand,
  returnGetAllBrand,
  returnGetOneBrand,
} = require("../../../Utils/BrandServices.js");
const createTabletBrand = returnCreateBrand(BrandTablets);
const updateTabletBrand = returnUpdateBrand(BrandTablets);
const deleteTabletBrand = returnDeleteBrand(BrandTablets);
const getAllTabletBrand = returnGetAllBrand(BrandTablets);
const getOneTabletBrand = returnGetOneBrand(BrandTablets);

module.exports = {
  createTabletBrand,
  updateTabletBrand,
  deleteTabletBrand,
  getAllTabletBrand,
  getOneTabletBrand,
};

const { BrandLaptops } = require("../../../models");
const {
  returnCreateBrand,
  returnUpdateBrand,
  returnDeleteBrand,
  returnGetAllBrand,
  returnGetOneBrand,
} = require("../../../Utils/BrandServices.js");
const createLaptopBrand = returnCreateBrand(BrandLaptops);
const updateLaptopBrand = returnUpdateBrand(BrandLaptops);
const deleteLaptopBrand = returnDeleteBrand(BrandLaptops);
const getAllLaptopBrand = returnGetAllBrand(BrandLaptops);
const getOneLaptopBrand = returnGetOneBrand(BrandLaptops);

module.exports = {
  createLaptopBrand,
  updateLaptopBrand,
  deleteLaptopBrand,
  getAllLaptopBrand,
  getOneLaptopBrand,
};

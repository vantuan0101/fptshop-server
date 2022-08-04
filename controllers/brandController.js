const {
  BrandPhones,
  BrandLaptops,
  BrandDesktops,
  BrandTablets,
  BrandAccessories,
} = require("../models");
const { returnCreateBrand } = require("../Utils/BrandServices.js");
const createPhoneBrand = returnCreateBrand(BrandPhones);

module.exports = {
  createPhoneBrand,
};

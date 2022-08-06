const { BrandDesktops } = require("../../../models");
const {
  returnCreateBrand,
  returnUpdateBrand,
  returnDeleteBrand,
  returnGetAllBrand,
  returnGetOneBrand,
} = require("../../../Utils/BrandServices.js");
const createDesktopBrand = returnCreateBrand(BrandDesktops);
const updateDesktopBrand = returnUpdateBrand(BrandDesktops);
const deleteDesktopBrand = returnDeleteBrand(BrandDesktops);
const getAllDesktopBrand = returnGetAllBrand(BrandDesktops);
const getOneDesktopBrand = returnGetOneBrand(BrandDesktops);

module.exports = {
  createDesktopBrand,
  updateDesktopBrand,
  deleteDesktopBrand,
  getAllDesktopBrand,
  getOneDesktopBrand,
};

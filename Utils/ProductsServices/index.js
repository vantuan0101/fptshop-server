const {
  returnGetAllProduct,
  returnCreateProduct,
  returnGetProduct,
  returnUpdateProduct,
} = require("./CRUDServices");
const { getHotProducts } = require("./MoreServices");

module.exports = {
  returnGetAllProduct,
  returnCreateProduct,
  returnGetProduct,
  getHotProducts,
  returnUpdateProduct
};

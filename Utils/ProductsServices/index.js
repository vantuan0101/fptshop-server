const {
  returnGetAllProduct,
  returnCreateProduct,
  returnGetProduct,
  returnUpdateProduct,
  returnDeleteProduct,
} = require("./CRUDServices");
const { getHotProducts } = require("./MoreServices");

module.exports = {
  returnGetAllProduct,
  returnCreateProduct,
  returnGetProduct,
  getHotProducts,
  returnUpdateProduct,
  returnDeleteProduct,
};

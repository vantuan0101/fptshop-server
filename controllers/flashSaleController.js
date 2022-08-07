const { Phones, Desktops, Tablets, Laptops } = require("../models");

const getProductSale = async (Product) => {
  const product = await Product.findAll({
    where: {
      isHot: true,
    },
  });
  return product;
};

const getHotSales = async (req, res) => {
  try {
    const phones = await getProductSale(Phones);
    const tablets = await getProductSale(Tablets);
    const desktops = await getProductSale(Desktops);
    const laptops = await getProductSale(Laptops);
    const listProduct = [...phones, ...tablets, ...desktops, ...laptops];
    res.status(200).json({
      status: "Success",
      data: listProduct,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error,
    });
  }
};

module.exports = { getHotSales };

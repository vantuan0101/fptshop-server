const { Phones, Desktops, Tablets } = require("../models");

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
    const listProduct = [...phones, ...tablets, ...desktops];
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

const { Products, ProductsDetails } = require("../models");

const getFlashSales = async (req, res) => {
  try {
    const productSale = await Products.findAll({
      where: {
        flash_sale: true,
      },
      include: {
        model: ProductsDetails,
      },
    });
    res.status(200).json({
      status: "Success",
      data: productSale,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error,
    });
  }
};

module.exports = { getFlashSales };

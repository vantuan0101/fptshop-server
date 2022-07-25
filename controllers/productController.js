const { Products, ProductsDetails, sequelize, Brands ,BrandPhones ,ProductPhones} = require("../models");
const { Op } = require("sequelize");

const getProducts = async (req, res) => {
  const sortPice = req.sortPice;
  const resOptionPrice = req.rangePrice;
  const resOptionBrand = req.rangeBrand;
  const pagination = req.page;
  console.log(req.params);
  let resultHandle = [];
  if (req.query.sort == "ban-chay-nhat") {
    resultHandle.push({
      [Op.or]: [
        {
          sold: {
            [Op.gt]: 10,
          },
        },
      ],
    });
  }

  if (resOptionPrice) {
    resultHandle.push({ [Op.or]: resOptionPrice });
  }
  if (resOptionBrand) {
    resultHandle.push({ [Op.or]: resOptionBrand });
  }

  // console.log(resultHandle);
  try {
    const products = await Products.findAndCountAll({
      where: {
        [Op.and]: resultHandle,
      },

      order: sortPice || [],
      limit: pagination?.limit,
      offset: pagination?.skip,
    });
    res.status(200).json({
      status: "Success",
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Product not found",
    });
  }
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Products.findOne({
      where: {
        id,
      },
    });
    res.status(200).json({
      status: "Success",
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Product not found",
    });
  }
};
const createProduct = async (req, res) => {
  try {
    const newProduct = await Products.create(req.body);
    res.status(201).json({
      status: "success",
      data: newProduct,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error,
    });
  }
};

const searchProduct = async (req, res) => {
  const { q } = req.query;
  // console.log(q);
  try {
    if (q === "") {
      return res.status(200).json({
        message: "The given data was invalid.",
        errors: {
          q: ["The q field is required."],
        },
        status_code: 422,
      });
    }

    const searchResult = await Products.findAll({
      where: {
        name: {
          [Op.like]: `%${q}%`,
        },
      },
    });
    res.status(200).json({
      status: "success",
      data: searchResult,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};
const getHotPhone = async (req, res) => {
  try {
    // const optionsReq = req.params;
    const productList = await BrandPhones.findAll({
      include :{
        model : ProductPhones,
      }
    });
    res.status(200).json({
      status: "success",
      data: productList,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
}

module.exports = { createProduct, getProducts, getProduct, searchProduct ,getHotPhone};

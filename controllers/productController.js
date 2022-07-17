const { Products, ProductsDetails, sequelize, Brands } = require("../models");
const { Op } = require("sequelize");

const getProducts = async (req, res) => {
  const sortPice = req.sortPice;
  const resOptionPrice = req.rangePrice;
  const resOptionBrand = req.rangeBrand;
  const resSearch = req.search;
  const  pagination = req.page ;
  // console.log(pagination);
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
  if (resSearch) {
    resultHandle.push({
      name: {
        [Op.like]: `%${resSearch}%`,
      },
    });
  }
  // console.log(resultHandle);
  try {
    const products = await Products.findAndCountAll({
      where: {
        [Op.and]: resultHandle,
      },
 
      order: sortPice || [],
      limit : pagination?.limit ,
      offset : pagination?.skip ,
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

module.exports = { createProduct, getProducts, getProduct };

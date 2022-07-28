const {
  StatusSales,
  BrandPhones,
  BrandLaptops,
  Phones,
  BrandDesktops,
  Desktops,
  BrandTablets,
  Tablets,
  Laptops,
  BrandAccessories,
  Accessories,
} = require("../models");
const { Op } = require("sequelize");
const { getHotProducts, returnResultProduct,returnCreateProduct } = require("../Utils/ProductsServices");

const getPhoneProducts = returnResultProduct(BrandPhones,Phones);
const getLaptopProducts = returnResultProduct(BrandLaptops,Laptops);
const getTabletProducts = returnResultProduct(BrandTablets,Tablets);
const getDesktopProducts = returnResultProduct(BrandDesktops,Desktops);
const getAccessoriesProducts =returnResultProduct(BrandAccessories,Accessories);

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
const createPhoneProduct = returnCreateProduct(Phones);


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
// Hot Products
const getHotPhone = getHotProducts(BrandPhones, Phones ,StatusSales);
const getHotLaptop = getHotProducts(BrandLaptops, Laptops ,StatusSales);

module.exports = {
  createPhoneProduct,
  getPhoneProducts,
  getLaptopProducts,
  getTabletProducts,
  getDesktopProducts,
  getAccessoriesProducts,
  getProduct,
  searchProduct,
  getHotPhone,
  getHotLaptop,
};

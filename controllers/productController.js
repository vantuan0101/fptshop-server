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
const { getHotProducts, returnGetAllProduct,returnCreateProduct,returnGetProduct } = require("../Utils/ProductsServices");

// Get Phone products
const getAllPhone = returnGetAllProduct(BrandPhones,Phones);
const getPhoneById = returnGetProduct(Phones)

// Get Laptop products
const getAllLaptop = returnGetAllProduct(BrandLaptops,Laptops);
const getLaptopById = returnGetProduct(Laptops)

// Get Tablet products
const getAllTablet = returnGetAllProduct(BrandTablets,Tablets);
const getTabletById = returnGetProduct(Tablets)

// Get Desktop products
const getAllDesktop = returnGetAllProduct(BrandDesktops,Desktops);
const getDesktopById = returnGetProduct(Desktops)

// Get accessories products
const getAllAccessories =returnGetAllProduct(BrandAccessories,Accessories);
const getAccessoriesById = returnGetProduct(Accessories)



// Create Product
const createPhoneProduct = returnCreateProduct(Phones);

// Search Product
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
  searchProduct,
  getHotPhone,
  getHotLaptop,
  // Get all
  getAllPhone,
  getAllLaptop,
  getAllTablet,
  getAllDesktop,
  getAllAccessories,
  // Get by id
  getPhoneById,
  getLaptopById,
  getTabletById,
  getDesktopById,
  getAccessoriesById
};

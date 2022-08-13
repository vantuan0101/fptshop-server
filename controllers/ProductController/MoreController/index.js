const {
  BrandPhones,
  Phones,
  BrandLaptops,
  Laptops,
  BrandTablets,
  Tablets,
  BrandDesktops,
  Desktops,
} = require("../../../models");
const { getHotProducts } = require("../../../Utils/ProductsServices");
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
const getHotPhone = getHotProducts(BrandPhones, Phones);
const getHotLaptop = getHotProducts(BrandLaptops, Laptops);
const getHotTablet = getHotProducts(BrandTablets, Tablets);
const getHotDesktop = getHotProducts(BrandDesktops, Desktops);

module.exports = {
  searchProduct,
  getHotPhone,
  getHotLaptop,
  getHotTablet,
  getHotDesktop,
};
const {
  BrandPhones,
  Phones,
  BrandLaptops,
  Laptops,
  BrandTablets,
  Tablets,
  BrandDesktops,
  Desktops,
  sequelize,
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
    const searchResult = await sequelize.query(`
    SELECT Phones.name , Phones.typeProduct , Phones.price , Phones.discountValue FROM Phones
    where name like  "%${q}%"
    UNION   
    SELECT Tablets.name , Tablets.typeProduct , Tablets.price , Tablets.discountValue FROM Tablets
    where name like  "%${q}%"
    UNION   
    SELECT Laptops.name , Laptops.typeProduct , Laptops.price , Laptops.discountValue FROM Laptops
    where name like  "%${q}%"
    UNION   
    SELECT Desktops.name , Desktops.typeProduct , Desktops.price , Desktops.discountValue FROM Desktops
    where name like  "%${q}%"
    `);
    
    res.status(200).json({
      status: "success",
      data: searchResult[0],
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

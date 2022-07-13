const { Products, ProductsDetails, sequelize, Brands } = require("../models");
const { Op } = require("sequelize");
// const getAllProducts = async (req, res) => {
//   try {
//     const [result] = await sequelize.query(`
//       select Brands.name as brands, Products.name as product_name, Products.discount, Products.price, ProductsDetails.color , ProductsDetails.image, ProductsDetails.description , ProductsDetails.specification,ProductsDetails.payment from  Brands
//       left JOIN Products
//       on Brands.id = Products.brand_id
//       left join ProductsDetails
//       on Products.id = ProductsDetails.product_id
//     `);
//     // const productList = await Products.findAll();
//     const productList = result.reduce((res, acc, i) => {
//       let products = [];
//       let data = {
//         product_name: acc?.product_name,
//         discount: acc?.discount,
//         price: acc?.price,
//         color: acc?.color,
//         image: acc?.image,
//         description: acc?.description,
//         specification: acc?.specification,
//         payment: acc?.payment,
//       };
//       if (res?.findIndex((item) => item?.brands === acc.brands) == -1) {
//         products = [...products, data];
//         const product = {
//           brands: acc.brands,
//           products,
//         };
//         res = [...res, product];
//       } else {
//         res = res?.map((item, index) => {
//           return item.brands === acc.brands
//             ? {
//                 ...item,
//                 products: [...item.products, data],
//               }
//             : item;
//         });
//       }
//       return res;
//     }, []);
//     res.status(200).json({
//       status: "success",
//       data: productList,
//     });
//   } catch (error) {
//     res.status(500).json({
//       status: "fail",
//       message: error,
//     });
//   }
// };

const getProducts = async (req, res) => {
  const { sort } = req.query;
  const resOptionPrice = req.rangePrice;
  const resOptionBrand = req.rangeBrand;
  const resSearch = req.search;
  // console.log(resOptionBrand);
  let resultHandle = [];
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
    const products = await Products.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: {
        model: ProductsDetails,
        attributes: { exclude: ["id", "createdAt", "updatedAt"] },
        // as : "products_list",
        // attributes: { exclude: ["id", "createdAt", "updatedAt"] },
      },

      where: {
        [Op.and]: resultHandle,
      },

      order: [["price", `${sort ? sort : "desc"}`]],
    });
    res.status(200).json({
      status: "Success",
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error,
    });
  }
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Brands.findOne({
      include: {
        model: Products,
        // as : 'products_list' ,
        where: {
          id,
        },
        include: ProductsDetails,
      },
    });
    res.status(200).json({
      status: "Success",
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error,
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

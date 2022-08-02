const { Op } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const base_url = process.env.BASE_URL;


// Get Hot Products
const getHotProducts =
  (ModelBrands, Products, StatusSales) => async (req, res) => {
    try {
      // const optionsReq = req.params;
      const productList = await ModelBrands.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] },

        include: {
          model: Products,
          where: {
            isHot: true,
          },
          include: StatusSales,
        },
        order: [["id", "ASC"]],
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
  };


  // Get All Product by Catelogy

  // const handleResultFilterProduct = async (Brands, Products, req) => {
  //   const sortPice = req.sortPice;
  //   const pagination = req.page;
  //   const resultHandle = req.resultHandle
  //   // console.log(req.params);
  //   // let resultHandle = [];
  //   // if (req.query.sort == "ban-chay-nhat") {
  //   //   resultHandle.push({
  //   //     [Op.or]: [
  //   //       {
  //   //         sold: {
  //   //           [Op.gt]: 10,
  //   //         },
  //   //       },
  //   //     ],
  //   //   });
  //   // }
  
  //   // if (resOptionPrice) {
  //   //   resultHandle.push({ [Op.or]: resOptionPrice });
  //   // }
  //   // if (resOptionBrand) {
  //   //   resultHandle.push({ [Op.or]: resOptionBrand });
  //   // }
  //   // console.log(resultHandle);
  //   const products = await Brands.findAndCountAll({
  //     include: {
  //       model: Products,
  
  //       where: {
  //         [Op.and]: resultHandle,
  //       },
  
  //       order: sortPice || [],
  //       limit: pagination?.limit,
  //       offset: pagination?.skip,
  //     },
  //   });
  //   return products;
  // };
const returnGetAllProduct = (BrandName, ProductName) => async (req, res) => {
  try {
    const sortPice = req.sortPice;
    const pagination = req.page;
    const resultHandle = req.resultHandle
    const products = await BrandName.findAndCountAll({
      include: {
        model: ProductName,
  
        where: {
          [Op.and]: resultHandle,
        },
  
        order: sortPice || [],
        limit: pagination?.limit,
        offset: pagination?.skip,
      },
    });
    // const products = await handleResultFilterProduct(BrandName, ProductName, req);
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

// Create Product
const getPathImage = (fileImg) => {
  let listImg = fileImg.reduce((acc, cur) => {
    acc.push(`${base_url}${cur.path}`);
    return acc;
  }, []);
  return listImg;
};
const returnCreateProduct = (ProductName) => async (req, res) => {
  try {
    const fileImg = req.files;
    const listImage = getPathImage(fileImg.image);
    const thumbnail = getPathImage(fileImg.thumbnail).toString();
    // console.log(listImage);
    // console.log(thumbnail);
    const dataProduct = req.body;
    const newProduct = await ProductName.create({
      ...dataProduct,
      thumbnail,
      image: listImage,
    });
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

// Get  Product by Id
const returnGetProduct = (ProductName) => async (req, res) => {
  try {
    const { id } = req.params;
    const product = await ProductName.findOne({
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
module.exports = {
  getHotProducts,
  returnGetAllProduct,
  returnCreateProduct,
  returnGetProduct
};

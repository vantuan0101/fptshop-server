const { Op } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const base_url = process.env.BASE_URL;
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
const getAllProducts = async (Brands, Products, req) => {
  const sortPice = req.sortPice;
  const resOptionPrice = req.rangePrice;
  const resOptionBrand = req.rangeBrand;
  const pagination = req.page;
  // console.log(req.params);
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
  const products = await Brands.findAndCountAll({
    include: {
      model: Products,

      where: {
        [Op.and]: resultHandle,
      },

      order: sortPice || [],
      limit: pagination?.limit,
      offset: pagination?.skip,
    },
  });
  return products;
  // try {
  //   res.status(200).json({
  //     status: "Success",
  //     data: products,
  //   });
  // } catch (error) {
  //   res.status(500).json({
  //     status: "fail",
  //     message: "Product not found",
  //   });
  // }
};

const returnResultProduct = (BrandName, ProductName) => async (req, res) => {
  try {
    const products = await getAllProducts(BrandName, ProductName, req);
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

const returnCreateProduct = (ProductName) => async (req, res) => {
  try {
    console.log(req.body);
    const thumbnail = `${base_url}${req.file.path}`;
    const dataProduct = req.body;
    const newProduct = await ProductName.create({...dataProduct , thumbnail});
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
module.exports = {
  getHotProducts,
  getAllProducts,
  returnResultProduct,
  returnCreateProduct,
};

const { Op } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const base_url = process.env.BASE_URL;

// Function get path image
const getPathImage = (fileImg) => {
  let listImg = fileImg?.reduce((acc, cur) => {
    acc.push(base_url + cur.path);
    return acc;
  }, []);
  return listImg;
};
// ------------------------------------------------------------

// Get All Product by Catelogy
const returnGetAllProduct = (BrandName, ProductName) => async (req, res) => {
  try {
    const sortPice = req.sortPice;
    const pagination = req.page;
    const resultHandle = req.resultHandle;
    const products = await ProductName.findAndCountAll({
      include: {
        model: BrandName,
      },
      where: {
        [Op.and]: resultHandle,
      },

      order: sortPice || [],
      limit: pagination?.limit,
      offset: pagination?.skip,
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

// Create Product

const returnCreateProduct = (ProductName) => async (req, res) => {
  try {
    const fileImg = req.files;
    const thumbnail = getPathImage(fileImg?.thumbnail).toString();
    const listImage = getPathImage(fileImg?.image);
    // console.log(listImage);
    // console.log(thumbnail);
    const dataProduct = req.body;
    // console.log(dataProduct);
    // const { options ,color} = req.body;
    const options = dataProduct?.options?.split(",");
    const color = dataProduct?.color?.split(",");
    console.log(options, color);
    const newProduct = await ProductName.create({
      ...dataProduct,
      thumbnail,
      image: listImage,
      options: options,
      // color: color,
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

// Update Product

const returnUpdateProduct = (ProductName) => async (req, res) => {
  const { id } = req.params;

  const fileImg = req.files;
  // console.log(fileImg);
  const thumbnail = getPathImage(fileImg?.thumbnail)?.toString();
  const listImage = getPathImage(fileImg?.image);
  // console.log(thumbnail);
  // console.log(listImage);
  const dataProduct = req.body;
  // console.log(dataProduct);
  const options = dataProduct?.options?.split(",");
  const color = dataProduct?.color?.split(",");
  // console.log(options, color);

  try {
    // console.log(dataProduct);
    const newProduct = await ProductName.update(
      {
        ...dataProduct,
        thumbnail: thumbnail,
        image: listImage,
        options: options,
        // color: color,
      },
      {
        where: {
          id,
        },
      }
    );
    res.status(200).json({
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

// Delete Product
const returnDeleteProduct = (ProductName) => async (req, res) => {
  const { id } = req.params;
  try {
    await ProductName.destroy({
      where: {
        id,
      },
    });
    res.status(200).json({
      status: "success",
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error,
    });
  }
};

module.exports = {
  returnGetAllProduct,
  returnCreateProduct,
  returnGetProduct,
  returnUpdateProduct,
  returnDeleteProduct,
};

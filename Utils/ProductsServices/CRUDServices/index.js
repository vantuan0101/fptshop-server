const { Op } = require("sequelize");
const {
  getPathImage,
} = require("../../../middlewares/services/imageCommonService");

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

// Create Product

const returnCreateProduct = (ProductName) => async (req, res) => {
  const fileImg = req.files;
  const urlThumbnail = getPathImage(fileImg?.thumbnail)?.toString();
  const urlListImage = getPathImage(fileImg?.image);
  const public_id_thumbnail = fileImg?.thumbnail
    ?.map((item) => item.filename)
    ?.toString();
  const defaultImage = {
    url: "http://localhost:3001/public/images/default/default-loading-image.png"
  };
  const public_id_image = fileImg?.image?.map((item) => item.filename);
  const thumbnail = { public_id: public_id_thumbnail, url: urlThumbnail || defaultImage};
  const image = { public_id: public_id_image, url: urlListImage || defaultImage };
  console.log(thumbnail);
  console.log(image);
  const dataProduct = req.body;
  // console.log(dataProduct);

  const color =
    dataProduct?.color !== "" ? dataProduct?.color?.split(",") : null;
  const options =
    dataProduct?.options !== "" ? dataProduct?.options?.split(",") : null;
  // console.log(typeof(dataProduct?.options),options);
  try {
    const newProduct = await ProductName.create({
      ...dataProduct,
      thumbnail,
      image,
      color,
      options,
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
  const urlThumbnail = getPathImage(fileImg?.thumbnail)?.toString();
  const urlListImage = getPathImage(fileImg?.image);
  const public_id_thumbnail = fileImg?.thumbnail
    ?.map((item) => item.filename)
    ?.toString();
  const public_id_image = fileImg?.image?.map((item) => item.filename);
  const thumbnail = { public_id: public_id_thumbnail, url: urlThumbnail };
  const image = { public_id: public_id_image, url: urlListImage };
  const dataProduct = req.body;
  // console.log(dataProduct);
  const color =
    dataProduct?.color !== "" ? dataProduct?.color?.split(",") : null;
  const options =
    dataProduct?.options !== "" ? dataProduct?.options?.split(",") : null;

  // console.log(color, options);

  try {
    // console.log(dataProduct);
    const newProduct = await ProductName.update(
      {
        ...dataProduct,
        thumbnail,
        image,
        color: color,
        options,
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

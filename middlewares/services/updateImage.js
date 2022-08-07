const { getPathImage, deleteImage } = require("./imageCommonService");

const handleUpdateImage = (ProductName) => async (req, res, next) => {
  const { id } = req.params;

  try {
    const fileImg = req.files;
    // console.log(fileImg);
    const thumbnail = getPathImage(fileImg?.thumbnail)?.toString();
    const listImage = getPathImage(fileImg?.image);
    console.log(thumbnail);
    console.log(listImage);
    const res = await ProductName.findOne({
      where: { id },
    });
    if (thumbnail) {
      deleteImage(res.thumbnail);
    }
    if (listImage) {
      res.image.forEach((item) => {
        deleteImage(item);
      });
    }
    next();
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Product not found",
    });
  }
};

module.exports = { handleUpdateImage };

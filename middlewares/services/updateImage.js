const { getPathImage, deleteImage } = require("./imageCommonService");

const handleUpdateImage = (ProductName) => async (req, res, next) => {
  const { id } = req.params;

  const fileImg = req.files;
  // console.log(fileImg);
  const thumbnail = getPathImage(fileImg?.thumbnail)?.toString();
  const listImage = getPathImage(fileImg?.image);
  const imageIcon = getPathImage(fileImg?.imageIcon)?.toString();
  // console.log(thumbnail);
  // console.log(listImage);
  try {
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
    if (imageIcon) {
      deleteImage(res.imageIcon);
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

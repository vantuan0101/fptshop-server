const { deleteImage } = require("./imageCommonService");

const handleDeleteImage = (ProductName) => async (req, res, next) => {
  const { id } = req.params;
  try {
    const res = await ProductName.findOne({
      where: { id },
    });
    if (res.thumbnail) {
      deleteImage(res.thumbnail);
    }
    if (res.image) {
      res.image.forEach((item) => {
        deleteImage(item);
      });
    }

    if (res.imageIcon) {
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

module.exports = { handleDeleteImage };

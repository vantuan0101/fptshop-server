const { deleteImageLocal, deleteImage } = require("./imageCommonService");

const handleUpdateImage = (ProductName) => async (req, res, next) => {
  const { id } = req.params;

  try {
    const res = await ProductName.findOne({
      where: { id },
    });
    if (res?.thumbnail?.public_id) {
      deleteImage(res.thumbnail.public_id);
    }
    if (res?.image?.public_id) {
      res?.image?.public_id?.forEach((item) => {
        deleteImage(item);
      });
    }
    if (res?.imageIcon) {
      deleteImageLocal(res.imageIcon);
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

// Get Hot Products
const getHotProducts = (ModelBrands, Products) => async (req, res) => {
  try {
    // const optionsReq = req.params;
    const productList = await Products.findAll({
      
      include: {
        model: ModelBrands,
        attributes: { exclude: ["createdAt", "updatedAt"] },
      },
      where: {
        isHot: true,
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
module.exports = {
  getHotProducts,
};

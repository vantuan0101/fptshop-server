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
module.exports = {
  getHotProducts,
};


const returnCreateBrand = (BrandName) => async (req, res) => {
  try {
    const { name } = req.body;
    const result = await BrandName.create({ name });
    res.status(201).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

module.exports = { returnCreateBrand };

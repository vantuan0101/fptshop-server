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
const returnUpdateBrand = (BrandName) => async (req, res) => {
  try {
    const data = req.body;
    const { id } = req.params;
    const result = await BrandName.update(data, {
      where: { id },
    });
    res.status(200).json({
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
const returnDeleteBrand = (BrandName) => async (req, res) => {
  try {
    const { id } = req.params;
    const result = await BrandName.destroy({
      where: { id },
    });
    res.status(200).json({
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
const returnGetAllBrand = (BrandName) => async (req, res) => {
  try {
    const result = await BrandName.findAll();
    res.status(200).json({
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
const returnGetOneBrand = (BrandName) => async (req, res) => {
  try {
    const { id } = req.params;
    const result = await BrandName.findOne({
      where: { id },
    });
    res.status(200).json({
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

module.exports = {
  returnCreateBrand,
  returnUpdateBrand,
  returnDeleteBrand,
  returnGetAllBrand,
  returnGetOneBrand,
};

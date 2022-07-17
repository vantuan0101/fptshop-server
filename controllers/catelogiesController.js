const { Catelogies, sequelize } = require("../models");

const getCatelogyDetails = async (req, res) => {
  try {
    const catelogy = await Catelogies.findAll();

    res.status(200).json({
      status: "success",
      data: catelogy,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

const createCatelogy = async (req, res) => {
  const catelogy = req.body;
  try {
    const newCatelogy = await Catelogies.create(catelogy);
    await newCatelogy.save();
    res.status(201).json({
      status: "success",
      data: newCatelogy,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

module.exports = {
  createCatelogy,
  getCatelogyDetails,
};

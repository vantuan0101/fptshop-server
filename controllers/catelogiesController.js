const { getPathImage } = require("../middlewares/services/imageCommonService");
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
const getOneCatelogy = async (req, res) => {
  const { id } = req.params;
  try {
    const catelogy = await Catelogies.findOne({
      where: { id },
    });
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
  const fileImg = req.files;
  const listImage = getPathImage(fileImg?.imageIcon)?.toString();
  try {
    const newCatelogy = await Catelogies.create({
      ...catelogy,
      image : listImage,
    });
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
const updateCatelogy = async (req, res) => {
  const { id } = req.params;
  const catelogy = req.body;
  const fileImg = req.files;
  const listImage = getPathImage(fileImg?.imageIcon)?.toString();
  // console.log(catelogy);
  // console.log(listImage);
  try {
    const updatedCatelogy = await Catelogies.update(
      {
        ...catelogy,
        image : listImage,
      },
      {
        where: { id },
      }
    );
    res.status(200).json({
      status: "success",
      data: updatedCatelogy,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
const deleteCatelogy = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedCatelogy = await Catelogies.destroy({
      where: { id },
    });
    res.status(200).json({
      status: "success",
      data: deletedCatelogy,
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
  getOneCatelogy,
  updateCatelogy,
  deleteCatelogy,
};

const { getPathImage } = require("../middlewares/services/imageCommonService");
const { Catelogies, sequelize } = require("../models");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const base_url = process.env.BASE_URL;

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
  const listImage = base_url + fileImg.imageIcon[0].path;


  try {
    const newCatelogy = await Catelogies.create({
      ...catelogy,
      imageIcon: listImage,
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
  const listImage = base_url + fileImg.imageIcon[0].path;

  // console.log(fileImg);
  // console.log(listImage);
  try {
    const updatedCatelogy = await Catelogies.update(
      {
        ...catelogy,
        imageIcon: listImage,
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

const { Users } = require("../models");
const bcrypt = require("bcrypt");
const { getPathImage } = require("../middlewares/services/imageCommonService");



const saltRounds = 10;

const getAllUser = async (req, res) => {
  try {
    const listUser = await Users.findAll();
    res.status(200).json({
      errCode: 0,

      status: "Success",
      data: listUser,
    });
  } catch (error) {
    res.status(500).json({
      errCode: 1,

      status: "fail",
      message: error,
    });
  }
};
const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const listUser = await Users.findOne({
      where: {
        id,
      },
    });
    res.status(200).json({
      errCode: 0,

      status: "Success",
      data: listUser,
    });
  } catch (error) {
    res.status(500).json({
      errCode: 1,

      status: "fail",
      message: error,
    });
  }
};

const updateUser = async (req, res) => {
  const fileImg = req.files;
  const avatar = getPathImage(fileImg?.avatar)?.toString();
  const { id } = req.params;
  const user = req.body;
  try {
    const newUser = await Users.update({ ...user, avatar }, { where: { id } });
    res.status(200).json({
      status: "Success",
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error,
    });
  }
};
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await Users.destroy({ where: { id } });
    res.status(200).json({
      status: "Success",
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error,
    });
  }
};


const createUser = async (req, res) => {
  const fileImg = req.files;
  const avatar = getPathImage(fileImg?.avatar)?.toString();
  try {
    const { first_name, last_name, email, phone, password, type_user } =
      req.body;
      // console.log(req.body);
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashPassword = bcrypt.hashSync(password, salt);
    const checkEmail = await Users.findOne({
      where: {
        email,
      },
    });
    if (checkEmail) {
      return res.status(500).json({
        errCode: 1,
        status: "fail",
        message: "Email is already exist",
      });
    }
    const newUser = await Users.create({
      first_name,
      last_name,
      email,
      phone,
      password: hashPassword,
      type_user,
      avatar,
    });
    res.status(200).json({
      errCode: 0,
      status: "Success",
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error,
    });
  }
};





module.exports = {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};

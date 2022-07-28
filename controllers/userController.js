const { Users } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv    = require("dotenv");
dotenv.config({ path: "./config.env" });
const saltRounds = 10;
const getAllUser = async (req, res) => {
  try {
    const listUser = await Users.findAll();
    res.status(200).json({
      status: "Success",
      data: listUser,
    });
  } catch (error) {
    res.status(500).json({
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
      status: "Success",
      data: listUser,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error,
    });
  }
};
const createUser = async (req, res) => {
  try {
    const user = req.body;
    // console.log('user', user);
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashPassword = bcrypt.hashSync(user.password, salt);
    // console.log(hashPassword);

    const newUser = await Users.create({ ...user, password: hashPassword });
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
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = req.body;
    const newUser = await Users.update({ ...user }, { where: { id } });
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

const handleLoging = async (req, res) => {
  const data = req.body;
  //   console.log(data);
  const user = await Users.findOne({
    where: {
      email: data.email,
    },
    raw: true,
  });
  //   console.log(user);
  if (user) {
    const result = bcrypt.compareSync(data.password, user.password);
    if (result) {
      const { first_name, last_name, email, phone, type_user } = user;
      const newUser = { first_name, last_name, email, phone, type_user };
      const token = jwt.sign(newUser, process.env.TOKEN_SECRET_KEY , {expiresIn :  process.env.TOKEN_EXPIRES_IN});
      res.status(200).json({
        status: "Success",
        data: newUser,
        token
      });
    } else {
      res.status(500).json({
        status: "fail",
        message: "Password is incorrect",
      });
    }
  } else {
    res.status(500).json({
      status: "fail",
      message: "Email is incorrect",
    });
  }
};

module.exports = {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  handleLoging,
};

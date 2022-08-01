const { Users } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
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
      const token = jwt.sign(newUser, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
        // expiresIn: '20s',
      });
      const refreshToken = jwt.sign(newUser, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN,
      });
      //   req.headers = token;
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        path: "/",
        sameSite: true,
        secure: false,
      });
      res.status(200).json({
        errCode: 0,
        status: "Success",
        data: newUser,
        token,
      });
    } else {
      res.status(500).json({
        errCode: 1,

        status: "fail",
        message: "Password is incorrect",
      });
    }
  } else {
    res.status(500).json({
      errCode: 1,

      status: "fail",
      message: "Email is incorrect",
    });
  }
};

const handleRegister = createUser = async (req, res) => {
  try {
    const { first_name, last_name, email, phone, password, type_user } =
      req.body;
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

const refreshTokenUser = async (req, res) => {
  try {
    const token = req.cookies?.refreshToken;
    // console.log(token);
    if (!token) {
      return res.status(401).json({
        errCode: 1,
        status: "fail",
        message: "No token",
      });
    }
    const decoded = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
    // console.log(decoded);
    const { first_name, last_name, email, phone, type_user } = decoded;
    const newUser = { first_name, last_name, email, phone, type_user };
    const newToken = jwt.sign(newUser, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
      // expiresIn:'20s',
    });
    res.status(200).json({
      errCode: 0,
      status: "Success",
      newToken,
    });
  } catch (error) {
    res.status(500).json({
      errCode: 1,

      status: "fail",
      message: error,
    });
  }
};

const logoutUser = async (req, res) => {
  // console.log('logout');
  res.clearCookie("refreshToken");
  res.status(200).json({
    status: "Success",
  });
};

module.exports = {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  handleLoging,
  handleRegister,
  refreshTokenUser,
  logoutUser,
};

const { getPathImage } = require("../middlewares/services/imageCommonService");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Users } = require("../models");
const { sendMail } = require("../Utils/mailer");

const saltRounds = 10;

const handleRegister = async (req, res) => {
  const fileImg = req.files;
  const defaultImage = {
    url: `${process.env.BASE_URL}public/images/default/defaultavt.png`,
  };
  const avatar = getPathImage(fileImg?.avatar)?.toString();
  // console.log(avatar);
  try {
    const { first_name, last_name, email, phone, password, type_user } =
      req.body;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashPassword = bcrypt.hashSync(password, salt);
    const tokenConfirm = jwt.sign({ email }, process.env.TOKEN_EMAIL_SECRET, {
      expiresIn: process.env.TOKEN_EMAIL_EXPIRES_IN,
    });
    const tokenUrl = `${process.env.BASE_URL}api/v1/users/verify-email?token=${tokenConfirm}`;
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
      avatar: avatar || defaultImage,
    });

    // console.log(newUser);
    await sendMail(
      email,
      "Comfirm your email",
      `please click this link to confirm your email : ${tokenUrl}`
    );

    res.status(200).json({
      errCode: 0,
      status: "Success",
      message: "Please check your email to confirm your email",
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
      // expiresIn: process.env.JWT_EXPIRES_IN,
      expiresIn: "20s",
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
const verifyEmailToken = async (req, res) => {
  try {
    const token = req.query.token;
    // console.log(token);
    const decoded = jwt.verify(token, process.env.TOKEN_EMAIL_SECRET);
    // console.log(decoded);
    const { email } = decoded;
    await Users.update({ statusValidate: true }, { where: { email } });
    res.status(200).json({
      errCode: 0,
      status: "Success",
      message: "Your email has been verified",
    });
  } catch (error) {
    res.status(500).json({
      errCode: 1,
      status: "fail",
      message: error,
    });
  }
};

const handleLoging = async (req, res) => {
  const data = req.body;

  try {
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
        const {
          first_name,
          last_name,
          email,
          phone,
          type_user,
          avatar,
          statusValidate,
        } = user;
        const returnUser = {
          first_name,
          last_name,
          email,
          phone,
          type_user,
          avatar,
          statusValidate,
        };
        const newUser = { first_name, last_name, email, phone, type_user };
        const token = jwt.sign(newUser, process.env.JWT_SECRET, {
          // expiresIn: process.env.JWT_EXPIRES_IN,
          expiresIn: "20s",
        });
        const refreshToken = jwt.sign(
          newUser,
          process.env.REFRESH_TOKEN_SECRET,
          {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN,
          }
        );
        //   req.headers = token;
        res.cookie("refreshToken", refreshToken, {
          httpOnly: true,
          path: "/",
          sameSite: true,
          // secure: false,
          secure: req.secure || req.headers["x-forwarded-proto"] === "https",
          domain: "https://fptshop-client.herokuapp.com",
        });
        res.status(200).json({
          errCode: 0,
          status: "Success",
          data: returnUser,
          token,
        });
      } else {
        res.status(401).json({
          errCode: 1,
          status: "fail",
          message: "Password is incorrect",
        });
      }
    } else {
      res.status(401).json({
        errCode: 1,

        status: "fail",
        message: "Email is incorrect",
      });
    }
  } catch (error) {
    res.status(500).json({
      errCode: 1,

      status: "fail",
      message: error,
    });
  }
};

module.exports = {
  handleLoging,
  handleRegister,
  refreshTokenUser,
  logoutUser,
  verifyEmailToken,
};

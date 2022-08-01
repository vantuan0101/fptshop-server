const express = require("express");
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  handleLoging,
  handleRegister,
  refreshTokenUser,
  logoutUser
} = require("../controllers/userController");
const { authenticate } = require("../middlewares/auth/authenticate");
const { authorize } = require("../middlewares/auth/authorize");

const userRouter = express.Router();

userRouter.route("/refresh-token").post(refreshTokenUser);

userRouter.route("/logout").post(logoutUser);
userRouter.route("/login").post(handleLoging);
userRouter.route("/register").post(handleRegister);


userRouter.route("/").get(authenticate , authorize(['admin']), getAllUser).post(authenticate , authorize(['admin']),createUser);
userRouter.route("/:id").get(authenticate, getUserById).put(authenticate ,updateUser).delete(authenticate ,deleteUser);

module.exports = { userRouter };

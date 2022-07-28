const express = require("express");
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  handleLoging
} = require("../controllers/userController");

const userRouter = express.Router();

userRouter.route("/login").post(handleLoging);
userRouter.route("/").get(getAllUser).post(createUser);
userRouter.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

module.exports = { userRouter };

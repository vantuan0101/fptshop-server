const { authRouter } = require("./auth");
const { crudUserRouter } = require("./crudUser");

const userRouter = require("express").Router();

userRouter.use("/users", authRouter);
userRouter.use("/users", crudUserRouter);

module.exports = { userRouter };

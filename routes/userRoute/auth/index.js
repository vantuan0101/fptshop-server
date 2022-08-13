const {
  verifyEmailToken,
  refreshTokenUser,
  logoutUser,
  handleLoging,
  handleRegister,
} = require("../../../controllers/authController");

const authRouter = require("express").Router();

authRouter.route("/verify-email").get(verifyEmailToken);

authRouter.route("/refresh-token").post(refreshTokenUser);

authRouter.route("/logout").post(logoutUser);
authRouter.route("/login").post(handleLoging);
authRouter.route("/register").post(handleRegister);

module.exports = { authRouter };

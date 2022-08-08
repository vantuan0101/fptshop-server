const {
  getUserById,
  getAllUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../../../controllers/userController");
const { authenticate } = require("../../../middlewares/auth/authenticate");
const { authorize } = require("../../../middlewares/auth/authorize");
const { uploadImage } = require("../../../middlewares/upload/uploadImage");

const crudUserRouter = require("express").Router();

crudUserRouter
  .route("/")
  .get(authenticate, authorize(["admin"]), getAllUser)
  .post(
    authenticate,
    authorize(["admin"]),
    uploadImage("user/avatar", [{ name: "avatar" }]),
    createUser
  );
crudUserRouter
  .route("/:id")
  .get(authenticate, getUserById)
  .patch(
    authenticate,
    uploadImage("user/avatar", [{ name: "avatar" }]),
    updateUser
  )
  .delete(authenticate, deleteUser);
module.exports = { crudUserRouter };

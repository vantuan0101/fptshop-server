const {
  getUserById,
  getAllUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../../../controllers/userController");
const { authenticate } = require("../../../middlewares/auth/authenticate");
const { authorize } = require("../../../middlewares/auth/authorize");

const crudUserRouter = require("express").Router();

crudUserRouter
  .route("/")
  .get(authenticate, authorize(["admin"]), getAllUser)
  .post(authenticate, authorize(["admin"]), createUser);
crudUserRouter
  .route("/:id")
  .get(authenticate, getUserById)
  .put(authenticate, updateUser)
  .delete(authenticate, deleteUser);
module.exports = { crudUserRouter };

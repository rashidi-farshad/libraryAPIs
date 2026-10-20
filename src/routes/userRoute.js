import express from "express";
import * as userController from "../controllers/userController.js";
const router = express.Router();

router.route("/").get(userController.getUsers).post(userController.newUser);

router
  .route("/:id")
  .delete(userController.deleteUser)
  .put(userController.editUser)
  .get(userController.getOneUser);

export default router;

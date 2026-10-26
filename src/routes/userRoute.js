import express from "express";
import * as userController from "../controllers/userController.js";
import validate from "../middlewares/validate.js";
import userValidation from "../validations/userValidation.js";
import isAdmin from "../middlewares/isAdmin.js";
import validObjectId from "../middlewares/validObjectId.js";
import existUser from "../middlewares/existUser.js";

const router = express.Router();

router.post("/users", validate(userValidation), userController.createUser);
router.get("/users/:id", validObjectId, isAdmin, userController.getUsers);
router.delete(
  "/users/:id",
  validObjectId,
  isAdmin,
  existUser,
  userController.deleteUser,
);

export default router;

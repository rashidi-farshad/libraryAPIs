import express from "express";
const router = express.Router();
import * as userController from "../controllers/userController.js";
import validate from "../middlewares/validate.js";
import checkEmailExists from "../middlewares/checkEmailExists.js";
import userValidation from "../validations/userValidation.js";

router.post(
  "/register",
  validate(userValidation),
  checkEmailExists,
  userController.register,
);

export default router;

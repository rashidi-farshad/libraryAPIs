import express from "express";
const router = express.Router();
import * as userController from "../controllers/userController.js";
import validate from "../middlewares/validate.js";
import userValidation from "../validations/userValidation.js";
import checkEmailNotTaken from "../middlewares/checkEmailNotTaken.js";

router.post(
  "/signup",
  validate(userValidation),
  checkEmailNotTaken,
  userController.signup,
);

export default router;

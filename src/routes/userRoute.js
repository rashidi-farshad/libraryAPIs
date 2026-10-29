import express from "express";
const router = express.Router();
import * as userController from "../controllers/userController.js";
import validate from "../middlewares/validate.js";
import userValidation from "../validations/userValidation.js";
import checkEmailNotTaken from "../middlewares/checkEmailNotTaken.js";
import validateLogin from "../middlewares/validateLogin.js";

router.post(
  "/signup",
  validate(userValidation),
  checkEmailNotTaken,
  userController.signup,
);
router.post("/login", validateLogin, userController.login);

export default router;

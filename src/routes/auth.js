import express from "express";
import * as authController from "../controllers/auth.js";
import validate from "../middlewares/validate.js";
import { signupSchema, loginSchema } from "../validations/userValidation.js";
const router = express.Router();

router.post("/signup", validate(signupSchema), authController.signup);
router.post("/login", validate(loginSchema), authController.login);

export default router;

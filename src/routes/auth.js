import express from "express";
const router = express.Router();
import * as authController from "../controllers/auth.js";
import { signupSchema, loginSchema } from "../validations/userValidation.js";
import validate from "../middlewares/validate.js";

router.post("/signup", validate(signupSchema), authController.signup);
router.post("/login", validate(loginSchema), authController.login);

export default router;

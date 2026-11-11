import express from "express";
import * as authController from "../controllers/auth.js";
import validate from "../middlewares/validate.js";
import { signupSchema, loginSchema } from "../validations/userValidation.js";
const router = express.Router();

router.post("/register", validate(signupSchema), authController.register);

export default router;

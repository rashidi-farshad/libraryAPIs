import express from "express";
import * as authController from "../controllers/auth.js";
import validate from "../middlewares/validate.js";
import userValidation from "../validations/userValidation.js";
import authorization from "../middlewares/authorization.js";
const router = express.Router();

router.post("/register", validate(userValidation), authController.register);
router.post("/login", authController.login);

export default router;

import express from "express";
const router = express.Router();
import * as authController from "../controllers/auth.js";
import userValidation from "../validations/userValidation.js";
import validate from "../middlewares/validate.js";

router.post("/signup", validate(userValidation), authController.signup);

export default router;

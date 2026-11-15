import express from "express";
import * as otpController from "./otp.controller.js";
import validate from "../../middlewares/validate.js";
import otpValidation from "./otp.validation.js";
const router = express.Router();

router.post("/send", validate(otpValidation), otpController.sendOtp);

export default router;

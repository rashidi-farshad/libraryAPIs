import express from "express";
import * as otpController from "./otp.controller.js";
import validate from "../../middlewares/validate.js";
import { sendOtpSchema, verifyOtpSchema } from "./otp.validation.js";
const router = express.Router();

router.post("/send", validate(sendOtpSchema), otpController.sendOtp);
router.post("/verify", validate(verifyOtpSchema), otpController.verifyOtp);

export default router;

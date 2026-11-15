import express from "express";
import * as otpController from "./otp.controller.js";
import validate from "../../middlewares/validate.js";
import { sendOtpSchema, verifyOtpSchema } from "./otp.validation.js";
import {
  sendOtpLimiter,
  verifyOtpLimiter,
  phoneOtpLimiter,
} from "../../middlewares/rateLimit.js";
const router = express.Router();

router.post(
  "/send",
  validate(sendOtpSchema),
  sendOtpLimiter,
  phoneOtpLimiter,
  otpController.sendOtp,
);

router.post(
  "/verify",
  validate(verifyOtpSchema),
  verifyOtpLimiter,
  otpController.verifyOtp,
);

export default router;

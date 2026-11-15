import express from "express";
import * as otpController from "./otp.controller.js";
const router = express.Router();

router.post("/send", otpController.sendOtp);

export default router;

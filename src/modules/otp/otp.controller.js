import otpModel from "./otp.model.js";
import sendOtpSms from "../../services/sms.js";
import argon2 from "argon2";
import { randomInt } from "crypto";

export const sendOtp = async (req, res) => {
  const { phone } = req.body;

  const code = String(randomInt(10000, 100000));
  const hashedCode = await argon2.hash(code);
  const expiresAt = new Date(Date.now() + 2 * 60 * 1000);
  await otpModel.deleteMany({ phone });

  const otpData = await otpModel.create({
    phone,
    code: hashedCode,
    expiresAt,
  });

  try {
    await sendOtpSms(phone, code);
  } catch (error) {
    await otpModel.deleteOne({ _id: otpData._id });
    throw error;
  }

  return res.status(200).json({
    message: "otp sen successfully",
  });
};

export const verifyOtp = async (req, res) => {
  const { phone, code } = req.body;

  const otp = await otpModel.findOne({ phone });
  if (!otp || otp.expiresAt < new Date()) {
    return res.status(400).json({
      message: "invalid or expired code",
    });
  }
  const isMatch = await argon2.verify(otp.code, String(code));
  if (!isMatch) {
    return res.status(401).json({
      message: "Incorrect code",
    });
  }

  await otpModel.deleteOne({ _id: otp._id });

  return res.status(200).json({
    message: "The code is correct.",
  });
};

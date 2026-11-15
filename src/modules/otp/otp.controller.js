import otpModel from "./otp.model.js";
import sendOtpSms from "../../services/sms.js";
import argon2 from "argon2";

export const sendOtp = async (req, res) => {
  const { phone } = req.body;

  const code = Math.floor(Math.random() * 99999);
  const hashedCode = await argon2.hash(String(code));
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

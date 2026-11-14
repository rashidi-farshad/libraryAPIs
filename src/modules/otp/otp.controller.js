import otpModel from "./otp.model.js";
import { otp } from "../../services/sms.js";

export const sendOtp = async (req, res) => {
  const { phone } = req.body;
  const code = Math.floor(Math.random() * 99999);

  await otp(phone, code);

  await otpModel.deleteMany({ phone });

  await otpModel.create({
    phone,
    code,
    expireAt: new Date(Date.now() + 2 * 60 * 1000),
  });

  res.status(200).json({
    message: "OTP sent successfully",
  });
};

export const verifyOtp = async (req, res) => {
  const { phone, code } = req.body;

  const otp = await otpModel.findOne({
    phone,
    expireAt: { $gt: new Date() },
  });

  if (!otp) {
    return res.status(400).json({
      message: "Invalid or expired OTP",
    });
  }

  if (otp.verified) {
    return res.status(400).json({
      message: "OTP already used",
    });
  }

  if (otp.attempts >= 3) {
    return res.status(400).json({
      message: "Maximum attempts reached",
    });
  }

  otp.attempts += 1;

  if (otp.code !== Number(code)) {
    await otp.save();

    return res.status(400).json({
      message: "Invalid OTP",
    });
  }

  otp.verified = true;
  await otp.save();

  res.status(200).json({
    message: "Phone verified successfully",
  });
};

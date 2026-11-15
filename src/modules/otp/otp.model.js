import mongoose from "mongoose";

const otpSchema = new mongoose.Schema({
  phone: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  expiresAt: {
    type: Date,
    required: true,
    expires: 0,
  },
  attempts: {
    type: Number,
    default: 0,
  },
});
const otp = mongoose.model("Otp", otpSchema);
export default otp;

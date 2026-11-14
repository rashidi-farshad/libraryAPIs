import mongoose from "mongoose";

const otpSchema = new mongoose.Schema({
  code: {
    type: Number,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  expireAt: {
    type: Date,
    required: true,
    expires: 0,
  },
  attempts: {
    type: Number,
    default: 0,
  },
  verified: {
    type: Boolean,
    default: false,
  },
});

const otp = mongoose.model("Otp", otpSchema);
export default otp;

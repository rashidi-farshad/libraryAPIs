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
  },
  verified: {
    type: Number,
    default: 0,
  },
});

const otp = mongoose.model("Otp", otpSchema);
export default otp;

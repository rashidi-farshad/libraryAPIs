import { rateLimit } from "express-rate-limit";

export const sendOtpLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  limit: 5,
  message: {
    message: "Too many OTP requests. Try again later",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

export const verifyOtpLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 15,
  message: {
    message: "Too many verification requests. Try again later",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

export const phoneOtpLimiter = rateLimit({
  windowMs: 60 * 1000,
  limit: 1,
  keyGenerator: (req) => req.body.phone,
  message: {
    message: "Please wait before requesting another OTP",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

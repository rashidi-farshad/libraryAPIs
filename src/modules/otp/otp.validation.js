import { z } from "zod";

export const sendOtpSchema = z.object({
  phone: z.string().regex(/^09\d{9}$/),
});

export const verifyOtpSchema = z.object({
  phone: z.string().regex(/^09\d{9}$/),
  code: z.string().regex(/^\d{5}$/),
});

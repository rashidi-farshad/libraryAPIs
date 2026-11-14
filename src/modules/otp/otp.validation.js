import { z } from "zod";

const otpSchema = z.object({
  phone: z.string().regex(/^09\d{9}$/),
});

export default otpSchema;

import { z } from "zod";

const userValidation = z.object({
  name: z.string().trim().min(3).max(30),
  email: z.string().trim().toLowerCase(),
  password: z.string().min(6).max(64),
});

export default userValidation;

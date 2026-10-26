import { z } from "zod";

const userValidation = z.object({
  name: z.string().min(3).max(30),
  username: z.string().min(3).max(30),
  email: z.string().trim(),
  password: z.string().min(5),
});

export default userValidation;

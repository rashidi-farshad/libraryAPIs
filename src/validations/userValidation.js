import { z } from "zod";

const userValidation = z.object({
  name: z.string().trim().min(3).max(24),
  username: z.string().trim().toLowerCase().min(3).max(24),
  email: z.string().trim().toLowerCase().pipe(z.email()),
  password: z.string().min(8).max(64),
});
export default userValidation;

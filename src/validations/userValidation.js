import { z } from "zod";

const userValidation = z.object({
  name: z.string().trim().min(3).max(40),
  username: z.string().trim().min(3).max(35),
  email: z.string().trim().pipe(z.email()),
  password: z.string().min(8).max(64),
});

export default userValidation;

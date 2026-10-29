import { z } from "zod";

const userValidation = z.object({
  name: z.string().trim().min(2).max(50),
  email: z.string().trim().toLowerCase().pipe(z.email()),
  password: z.string().min(8),
});
export default userValidation;

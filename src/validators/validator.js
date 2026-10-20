import { z } from "zod";

const userSchemaValidation = z.object({
  name: z.string().trim().min(3).max(30),
  username: z.string().trim().min(3).max(30),
  email: z.string().trim().max(254),
  number: z.string().min(1),
  password: z.string().min(8).max(128),
});

export default userSchemaValidation;

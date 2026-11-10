import { z } from "zod";

export const signupSchema = z.object({
  name: z.string().trim().min(3).max(24),
  username: z.string().trim().toLowerCase().min(3).max(24),
  email: z.string().trim().toLowerCase().pipe(z.email()),
  password: z.string().min(8).max(128),
});

export const loginSchema = z.object({
  identifier: z.string().trim().toLowerCase().min(1).max(100),
  password: z.string().min(1).max(128),
});

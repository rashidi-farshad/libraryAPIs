import { z } from "zod";

const userSchemaValidation = z.object({
  name: z.string().trim().min(3).max(30),
  username: z.string().trim().min(3).max(30),
  email: z.string().trim().max(254),
  number: z.string().min(1),
  password: z.string().min(8).max(128),
});

export const userEditSchemaValidation = z.object({
  name: z.string().trim().min(3).max(30).optional(),
  username: z.string().trim().min(3).max(30).optional(),
  email: z.string().trim().max(254).optional(),
  number: z.string().min(1).optional(),
  password: z.string().min(8).max(128).optional(),
});

const bookSchemaValidation = z.object({
  title: z.string().min(4).max(150),
  author: z.string().min(4).max(150),
  price: z.number().int(),
});

const bookEditSchemaValidation = z.object({
  title: z.string().min(4).max(150).optional(),
  author: z.string().min(4).max(150).optional(),
  price: z.number().int().optional(),
});

export default userSchemaValidation;
export { bookSchemaValidation, bookEditSchemaValidation };

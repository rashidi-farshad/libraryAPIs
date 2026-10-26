import { z } from "zod";

const postValidation = z.object({
  title: z.string().min(1, "عنوان الزامی است"),
  content: z.string().min(1, "محتوا الزامی است"),
  author: z.string().regex(/^[0-9a-fA-F]{24}$/, "شناسه نویسنده معتبر نیست"),
});

export default postValidation;

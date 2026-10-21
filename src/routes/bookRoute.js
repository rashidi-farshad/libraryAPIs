import express from "express";
const router = express.Router();
import isAdmin from "../middlewares/middleware.js";
import * as bookController from "../controllers/bookController.js";

// router.use(isAdmin); //  یعنی اول این میدلور برای تمام مسیر ها اجرا بشه و لازم نیست برای هرکدام تک تک بنویسیم
router
  .route("/")
  .get(isAdmin, bookController.getBooks)
  .post(isAdmin, bookController.addBook);

router
  .route("/:id")
  .delete(isAdmin, bookController.deleteBook)
  .put(bookController.editBook)
  .get(isAdmin, bookController.getOneBook);

export default router;

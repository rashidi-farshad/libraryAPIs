import express from "express";
const router = express.Router();
import * as bookController from "../controllers/bookController.js";

router.route("/").get(bookController.getBooks).post(bookController.addBook);

router
  .route("/:id")
  .delete(bookController.deleteBook)
  .put(bookController.editBook);

export default router;

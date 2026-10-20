import express from "express";
const router = express.Router();
import * as bookController from "../controllers/bookController.js";

router.get("/", bookController.getBooks);
router.post("/", bookController.addBook);
router.delete("/:id", bookController.deleteBook);
router.put("/:id", bookController.editBook);

export default router;

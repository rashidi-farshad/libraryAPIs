import express from "express";
import * as commentController from "../controllers/commentController.js";
import validate from "../middlewares/validate.js";
import isAdmin from "../middlewares/isAdmin.js";
import validObjectId from "../middlewares/validObjectId.js";

const router = express.Router();

router.post("/comment/:id", validObjectId, commentController.createComment);

export default router;

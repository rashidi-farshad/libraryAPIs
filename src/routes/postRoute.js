import express from "express";
import * as postController from "../controllers/postController.js";
import validate from "../middlewares/validate.js";
import postValidation from "../validations/postValidation.js";
import isAdmin from "../middlewares/isAdmin.js";
import validObjectId from "../middlewares/validObjectId.js";

const router = express.Router();

router.post("/posts", validate(postValidation), postController.newPost);
router.get("/posts", postController.getPosts);
router.get("/post/:id", validObjectId, postController.getOnePost);

export default router;

import express from "express";
import * as multerController from "../controllers/multerController.js";
import uploader from "../middlewares/multer.js";

const router = express.Router();

router.post("/profile", uploader.array("avatar", 3), multerController.upload);

export default router;

import express from "express";
import * as courseController from "../controllers/courseController.js";
import isAdmin from "../middlewares/middleware.js";
const router = express.Router();

router.route("/").get(courseController.getCourse);

export default router;

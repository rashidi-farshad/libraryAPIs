import express from "express";
const router = express.Router();
import * as authController from "../controllers/auth.js";

router.post("/signup", authController.signup);

export default router;

import express from "express";
import * as Controller from "./auth.controller.js";
const router = express.Router();

router.post("/register", Controller.register);

export default router;

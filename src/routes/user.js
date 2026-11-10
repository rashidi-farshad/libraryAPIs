import express from "express";
const router = express.Router();
import * as userController from "../controllers/user.js";
import authorization from "../middlewares/authorization.js";
import isAdmin from "../middlewares/isAdmin.js";

router.get("/", authorization, isAdmin, userController.getAllUsers);

export default router;

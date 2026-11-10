import express from "express";
const router = express.Router();
import * as userController from "../controllers/user.js";
import authorization from "../middlewares/authorization.js";

router.get("/users", authorization, userController.getAllUsers);

export default router;

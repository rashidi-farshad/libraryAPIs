import express from "express";
import * as userController from "../controllers/userController.js";
const router = express.Router();

router.get("/", userController.getUsers);
router.post("/", userController.newUser);
router.delete("/:id", userController.deleteUser);
router.put("/:id", userController.editUser);

export default router;

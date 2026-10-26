import express from "express";
import * as userController from "../controllers/userController.js";
import validate from "../middlewares/validate.js";
import userValidation from "../validations/userValidation.js";
import isAdmin from "../middlewares/isAdmin.js";
import validObjectId from "../middlewares/validObjectId.js";

const router = express.Router();

router.post("/users", validate(userValidation), userController.createUser);
router.get("/users/:id", validObjectId, isAdmin, userController.getUsers);

export default router;

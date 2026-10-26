import express from "express";
import * as userController from "../controllers/userController.js";
import validate from "../middlewares/validate.js";
import userValidation from "../validations/userValidation.js";

const router = express.Router();

router.post("/users", validate(userValidation), userController.createUser);

export default router;

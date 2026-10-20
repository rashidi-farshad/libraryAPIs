import userModel from "../models/userModel.js";
import userSchemaValidation from "../validators/validator.js";
import mongoose from "mongoose";

export const getUsers = async (req, res) => {
  const users = await userModel.find();
  res.send(users);
};

export const newUser = async (req, res) => {
  const result = userSchemaValidation.safeParse(req.body);

  if (!result.success) {
    return res
      .status(400)
      .json(result.error.issues, { message: "cannot create this user" });
  }

  const user = await userModel.create(result.data);
  res.json({ message: "new user added", user });
};

export const deleteUser = async (req, res) => {
  let { id } = req.params;
  const existUser = mongoose.isValidObjectId(id);

  if (!existUser) {
    return res.status(400).json({ message: "user not found..." });
  }
  await userModel.findByIdAndDelete(id);
  res.json({ message: "user removed successfully.." });
};

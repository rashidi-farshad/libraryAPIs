import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import argon2 from "argon2";

export const createUser = async (req, res) => {
  let { name, username, email, password, address, role } = req.body;
  const hashedPasssword = await argon2.hash(password);
  const user = await userModel.create({
    name,
    username,
    email,
    password: hashedPasssword,
    address,
    role,
  });
  res.status(201).json({ message: "new user added", user });
};

export const getUsers = async (req, res) => {
  const users = await userModel.find();
  res.status(200).json(users);
};

export const deleteUser = async (req, res) => {
  let { userId } = req.body;
  const user = await userModel.findByIdAndDelete(userId);
  res.status(200).json({ message: "user deleted by admin", user });
};

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  }, // اینجا هشِ پسورد ذخیره می‌شود
});

export default mongoose.model("User", userSchema);

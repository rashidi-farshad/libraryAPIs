import userModel from "../models/userModel.js";
import bcrypt, { hash } from "bcrypt";
import argon2 from "argon2";
import jwt from "jsonwebtoken";
import "dotenv/config";

export const createUser = async (req, res) => {
  let { name, username, email, password, address } = req.body;
  const hashedPasssword = await argon2.hash(password);
  const user = await userModel.create({
    name,
    username,
    email,
    password: hashedPasssword,
    address,
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

export const login = async (req, res) => {
  let { email, password } = req.body;
  const user = await userModel.findOne({ email });
  if (!user) {
    return res.status(401).json({ message: "invalid email or password" });
  }

  const isMatch = await argon2.verify(user.password, password);
  if (!isMatch) {
    return res.status(401).json({ message: "invalid email or password" });
  }

  const token = jwt.sign(
    { userId: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1d" },
  );

  res.json({ message: "login successfully" }, token);
};

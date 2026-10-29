import User from "../models/User.js";
import argon2 from "argon2";
import jwt from "jsonwebtoken";
import "dotenv/config";
const secret = process.env.JWT_SECRET;

export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await argon2.hash(password);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });
  res.status(201).json({
    message: "signup successfully",
    userId: user._id,
    name: user.name,
    email: user.email,
  });
};

export const login = async (req, res) => {
  const token = jwt.sign(
    {
      userId: req.user._id,
      name: req.user.name,
    },
    secret,
    { expiresIn: "1h" },
  );
  res.status(200).json({
    message: "login successfully",
    token,
  });
};

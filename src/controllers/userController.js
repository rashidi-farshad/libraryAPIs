import User from "../models/User.js";
import argon2 from "argon2";

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

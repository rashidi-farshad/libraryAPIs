import userModel from "../models/user.js";
import argon2 from "argon2";

export const signup = async (req, res) => {
  const { name, username, email, password } = req.body;

  const exists = await userModel.exists({
    $or: [{ username }, { email }],
  });
  if (exists) {
    return res.status(409).json({ message: "user already exists" });
  }

  const hashedPassword = await argon2.hash(password);

  const user = await userModel.create({
    name,
    username,
    email,
    password: hashedPassword,
  });

  const userObject = user.toObject();
  delete userObject.password;

  return res.status(201).json({
    message: "signup successfully",
    user: userObject,
  });
};

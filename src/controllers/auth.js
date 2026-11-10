import userModel from "../models/user.js";
import argon2 from "argon2";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  const { name, username, email, password } = req.body;

  const isExistUser = await userModel.exists({
    $or: [{ username }, { email }],
  });

  if (isExistUser) {
    return res.status(409).json({
      message: "username or email is already exist",
    });
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

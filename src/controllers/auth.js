import userModel from "../models/user.js";
import argon2 from "argon2";
import generateToken from "../utils/generateToken.js";

export const register = async (req, res) => {
  const { name, username, email, password } = req.body;

  const isUserExists = await userModel.exists({
    $or: [{ username }, { email }],
  });

  if (isUserExists) {
    return res.status(409).json({
      message: "email or username is already exist",
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

  const token = generateToken(user._id);

  return res.status(201).json({
    message: "register seccessfully",
    user: userObject,
    token,
  });
};

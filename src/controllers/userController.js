import User from "../models/userModel.js";
import argon2 from "argon2";

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  const hashedPassword = await argon2.hash(password);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  res.status(201).json({
    message: "register successfully",
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
    },
  });
};

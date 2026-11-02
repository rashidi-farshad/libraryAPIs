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

const login = async (req, res) => {
  const { identify, password } = req.body;

  const user = await userModel
    .findOne({
      $or: [{ username: identify }, { email: identify }],
    })
    .select("+password");

  if (!user) {
    return res.status(401).json({
      message: "incorrect information",
    });
  }

  const isMatch = await argon2.verify(user.password, password);
  if (!isMatch) {
    return res.status(401).json({
      message: "incorrect information",
    });
  }

  const token = generateToken(user._id);

  return res.status(200).json({
    message: "login successfully",
    token,
  });
};

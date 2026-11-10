import userModel from "../models/user.js";
import argon2 from "argon2";
import generateToken from "../utils/generateToken.js";

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

  const token = generateToken(user._id);

  const userObject = user.toObject();
  delete userObject.password;

  return res.status(201).json({
    message: "signup successfully",
    user: userObject,
    token,
  });
};

export const login = async (req, res) => {
  const { identifier, password } = req.body;

  const user = await userModel
    .findOne({
      $or: [{ username: identifier }, { email: identifier }],
    })
    .select("+password");

  if (!user || !(await argon2.verify(user.password, password))) {
    return res.status(401).json({
      message: "The input information is incorrect.",
    });
  }

  const token = generateToken(user._id);
  res.status(200).json({
    message: "login successfully",
    token,
  });
};

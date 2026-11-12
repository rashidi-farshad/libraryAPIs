import userModel from "../models/user.js";
import argon2 from "argon2";
import {
  generageAccessToken,
  generageRefreshToken,
} from "../utils/generateToken.js";
import hashTokenGenerator from "../utils/hashToken.js";
import { jwt } from "zod";

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

export const login = async (req, res) => {
  const { identifier, password } = req.body;

  const user = await userModel
    .findOne({
      $or: [{ username: identifier }, { email: identifier }],
    })
    .select("+password");
  if (!user || !(await argon2.verify(user.password, password))) {
    return res.status(401).json({
      message: "invalid information",
    });
  }

  const accessToken = generageAccessToken(user._id);
  const refreshToken = generageRefreshToken(user._id);

  const hashToken = await hashTokenGenerator(refreshToken);
  await userModel.updateOne({ _id: user._id }, { refreshToken: hashToken });

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  return res.status(200).json({
    message: "login successfully",
    accessToken,
  });
};

export const refresh = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) {
    return res.status(401).json({
      message: "refresh token require",
    });
  }

  try {
    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
    const user = await userModel.findById(decoded.id);
    if (!user) {
      return res.status(401).json({
        message: "user not found",
      });
    }

    const isMatch = await argon2.verify(user.refreshToken, refreshToken);
    if (!isMatch) {
      return res.status(401).json({
        message: "invalid refresh token",
      });
    }

    const newAccessToken = generageAccessToken(user._id);
    const newRefreshToken = generageRefreshToken(user._id);

    const hashToken = await hashTokenGenerator(newRefreshToken);

    await userModel.updateOne({ _id: user._id }, { refreshToken: hashToken });

    res.cookie("refreshToken", newRefreshToken, {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({ newAccessToken });
  } catch {
    return res.status(401).json({
      message: "invalid or expired token",
    });
  }
};

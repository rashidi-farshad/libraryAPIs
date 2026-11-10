import userModel from "../models/user.js";

export const getAllUsers = async (req, res) => {
  const users = await userModel.find();
  res.status(200).json(users);
};

export const getMe = async (req, res) => {
  const user = await userModel.findById(req.user.id);
  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }
  res.status(200).json({ user });
};

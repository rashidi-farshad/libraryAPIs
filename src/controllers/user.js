import userModel from "../models/user.js";

export const getAllUsers = async (req, res) => {
  const users = await userModel.find();
  res.status(200).json(users);
};

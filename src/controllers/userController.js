import userModel from "../models/userModel.js";

export const createUser = async (req, res) => {
  let { name, username, email, password, role } = req.body;
  const user = await userModel.create({
    name,
    username,
    email,
    password,
    role,
  });
  res.status(201).json({ message: "new user added", user });
};

export const getUsers = async (req, res) => {
  const users = await userModel.find().lean();
  res.status(200).json(users);
};

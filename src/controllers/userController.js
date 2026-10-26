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

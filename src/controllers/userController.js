import userModel from "../models/userModel.js";
import userSchemaValidation from "../validators/validator.js";

export const getUsers = async (req, res) => {
  const users = await userModel.find();
  res.send(users);
};

export const newUser = async (req, res) => {
  const result = userSchemaValidation.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json(result.error.issues);
  }

  const user = await userModel.create(result.data);
  res.json({ message: "new user added", user });
};

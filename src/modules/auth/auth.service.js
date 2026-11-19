import userModel from "../users/user.model.js";

export const register = async (data) => {
  const existsUser = await userModel.findOne({
    $or: [{ email: data.email }, { username: data.username }],
  });

  if (existsUser) {
    const error = new Error("Email or Username already exists");
    error.status = 409;
    throw error;
  }

  const user = await userModel.create({
    email: data.email,
    username: data.username,
    biography: data.biography,
    name: data.name,
    password: data.password,
  });

  const userObject = user.toObject();
  delete userObject.password;

  return userObject;
};

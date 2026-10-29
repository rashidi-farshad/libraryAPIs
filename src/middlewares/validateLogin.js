import User from "../models/User.js";
import argon2 from "argon2";

const validateLogin = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select("+password");
  const isMatch = user && (await argon2.verify(user.password, password));
  if (!isMatch) {
    return res.status(401).json({
      message: "email or password incorrect",
    });
  }
  req.user = user;
  next();
};
export default validateLogin;

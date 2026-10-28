import User from "../models/userModel.js";

const checkEmailExists = async (req, res, next) => {
  const exists = await User.exists({ email: req.body.email });
  if (exists) {
    return res.status(409).json({ message: "Email already registered" });
  }
  next();
};

export default checkEmailExists;

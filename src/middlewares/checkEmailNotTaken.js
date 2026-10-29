import User from "../models/User.js";

const checkEmailNotTaken = async (req, res, next) => {
  const exist = await User.exists({ email: req.body.email });
  if (exist) {
    return res.status(409).json({ message: "Email already in use" });
  }
  next();
};
export default checkEmailNotTaken;

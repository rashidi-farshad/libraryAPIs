import userModel from "../models/userModel.js";

const existUser = async (req, res, next) => {
  let { userId } = req.body;
  const user = await userModel.findById(userId);

  if (!user) {
    return res.status(400).json({ message: "user id not found" });
  }
  next();
};
export default existUser;

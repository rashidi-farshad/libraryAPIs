import userModel from "../models/user.js";

const isAdmin = async (req, res, next) => {
  const admin = await userModel.exists({ _id: req.user.id, role: "ADMIN" });
  if (!admin) {
    return res.status(403).json({
      message: "Only admins have access.",
    });
  }
  next();
};

export default isAdmin;

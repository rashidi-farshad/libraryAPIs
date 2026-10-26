import userModel from "../models/userModel.js";

const isAdmin = async (req, res, next) => {
  let { id } = req.params;
  const admin = await userModel.findOne({
    _id: id,
    role: "ADMIN",
  });

  if (!admin) {
    return res.status(403).json({ message: "you dont have access..." });
  }
  next();
};
export default isAdmin;

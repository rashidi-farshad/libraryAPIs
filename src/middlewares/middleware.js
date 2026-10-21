import mongoose from "mongoose";
import userModel from "../models/userModel.js";

const isAdmin = async (req, res, next) => {
  let { id } = req.body;
  const isValidId = mongoose.isValidObjectId(id);

  if (!isValidId) {
    return res.status(404).json({ message: "id is not valid..." });
  }
  const user = await userModel.findOne({
    _id: id,
    role: "ADMIN",
  });
  // دستکاری req
  req.user = user;
  console.log("user =>", user);

  if (!user) {
    return res.status(403).json({ message: "you dont have a access..." });
  }
  next();
};

export default isAdmin;

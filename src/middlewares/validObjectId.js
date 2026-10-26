import mongoose from "mongoose";

const validObjectId = (req, res, next) => {
  let { id } = req.params;
  const validId = mongoose.isValidObjectId(id);

  if (!validId) {
    return res.status(404).json({ message: "invalid Id" });
  }
  next();
};

export default validObjectId;

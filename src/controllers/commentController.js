import commentModel from "../models/commentModel.js";
import postModel from "../models/postModel.js";

export const createComment = async (req, res) => {
  const { id } = req.params;
  const { body } = req.body;

  const findPost = await postModel.findById(id);
  if (!findPost) {
    return res.status(400).json(Error);
  }
  const comment = await commentModel.create({
    body,
    post: id,
  });
  res.status(201).json({ message: "comment added..", comment });
};

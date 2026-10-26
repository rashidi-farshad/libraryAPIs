import postModel from "../models/postModel.js";

const existPost = async (req, res, next) => {
  let { id } = req.body;
  const post = await postModel.findById(id);

  if (!post) {
    return res.status(400).json({ message: "post id not found" });
  }
  next();
};
export default existPost;

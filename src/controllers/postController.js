import postModel from "../models/postModel.js";

export const newPost = async (req, res) => {
  let { title, content, author } = req.body;
  const post = await postModel.create({
    title,
    content,
    author,
  });
  res.status(201).json({ message: "new post added", post });
};

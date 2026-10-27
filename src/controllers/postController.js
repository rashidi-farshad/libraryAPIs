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

export const getPosts = async (req, res) => {
  const posts = await postModel
    .find()
    .select("-__v")
    .populate("comment")
    .populate("author", "name username email");

  res.status(200).json(posts);
};

export const getOnePost = async (req, res) => {
  const { id } = req.params;

  const post = await postModel
    .findById(id)
    .populate("author", "name username email")
    .populate("comment")
    .select("-__v");

  res.status(200).json(post);
};

export const deletePost = async (req, res) => {
  const { id } = req.body;
  await postModel.findByIdAndDelete(id);
  res.status(200).json({ message: "post detele by admin" });
};

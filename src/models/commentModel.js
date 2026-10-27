import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  body: {
    type: String,
    required: true,
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  },
});

const comment = mongoose.model("Comment", commentSchema);
export default comment;

import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

postSchema.virtual("comment", {
  ref: "Comment",
  localField: "_id",
  foreignField: "post",
});

postSchema.set("toJSON", { virtuals: true });

const post = mongoose.model("Post", postSchema);
export default post;

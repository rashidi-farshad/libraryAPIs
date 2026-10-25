import mongoose from "mongoose";
const commentSchema = new mongoose.Schema({
  body: {
    type: String,
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
  },
});

const comment = mongoose.model("Comment", commentSchema);
export default comment;

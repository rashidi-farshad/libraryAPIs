import mongoose from "mongoose";
import teacherModel from "../models/teacherModel.js";

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  teacherId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teacher",
  },
});

const course = mongoose.model("Course", courseSchema);
export default course;

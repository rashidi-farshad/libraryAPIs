import mongoose from "mongoose";
import { teacherSchema } from "../models/teacherModel.js";

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  teacherId: {
    type: teacherSchema,
  },
});

const course = mongoose.model("Course", courseSchema);
export default course;

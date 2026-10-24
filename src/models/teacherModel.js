import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    enum: ["USER", "ADMIN"],
    default: "USER",
  },
});

const teacher = mongoose.model("Teacher", teacherSchema);
export default teacher;

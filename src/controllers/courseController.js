import mongoose from "mongoose";
import courseModel from "../models/courseModel.js";

export const getCourse = async (req, res) => {
  const course = await courseModel
    .find({}, "-__v")
    .populate("teacherId", "fullName");
  res.json(course);
};

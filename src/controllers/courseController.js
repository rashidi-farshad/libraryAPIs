import mongoose from "mongoose";
import courseModel from "../models/courseModel.js";
import { teacher } from "../models/teacherModel.js";

export const getCourse = async (req, res) => {
  const findTeacher = await teacher.findOne({
    _id: "6adc977a62ffc5b6a87208d5",
  });
  await courseModel.create({
    title: "deep js",
    teacherId: findTeacher,
  });

  res.json(findTeacher);
};

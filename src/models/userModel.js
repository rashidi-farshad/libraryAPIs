import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minLength: 3,
    maxLength: 30,
  },

  username: {
    type: String,
    required: true,
    trim: true,
    minLength: 3,
    maxLength: 20,
    unique: true,
  },

  email: {
    type: String,
    required: true,
    trim: true,
    maxLength: 254,
    unique: true,
  },

  number: {
    type: String,
    required: true,
    min: 1,
  },

  password: {
    type: String,
    required: true,
    minLength: 8,
    maxLength: 128,
    select: false,
  },
  role: {
    type: String,
    enum: ["USER", "ADMIN"],
    default: "USER",
  },
});

const user = mongoose.model("User", userSchema);
export default user;

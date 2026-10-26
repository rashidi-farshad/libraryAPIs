import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    maxLength: 30,
    required: true,
  },
  username: {
    type: String,
    minLength: 3,
    maxLength: 30,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 5,
  },
  role: {
    type: String,
    enum: ["USER", "ADMIN"],
    default: "USER",
  },
  address: {
    city: { type: String },
    street: { type: String },
  },
});

const userModel = mongoose.model("User", userSchema);
export default userModel;

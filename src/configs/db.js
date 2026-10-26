import mongoose from "mongoose";
import "dotenv/config";

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("connect to db");
};

export default connectDB;

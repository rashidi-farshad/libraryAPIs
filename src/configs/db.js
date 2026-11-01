import mongoose from "mongoose";
import "dotenv/config";

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("mongodb uri not found in .env");
    }
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connect to db");
  } catch (error) {
    console.error("connection db failed", error.message);
    process.exit(1);
  }
};
export default connectDB;

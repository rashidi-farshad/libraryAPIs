import mongoose from "mongoose";
import "dotenv/config";

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URL) {
      throw new Error("mongodb url is not defined in .env");
    }
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connect to db");
  } catch (error) {
    console.error("db connection failed", error.message);
    process.exit(1);
  }
};

export default connectDB;

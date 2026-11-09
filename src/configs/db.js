import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("mongo url not found in .env");
    }
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connect to db");
  } catch (error) {
    console.error("db connection is failed", error.message);
    process.exit(1);
  }
};
export default connectDB;

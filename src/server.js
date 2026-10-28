import "dotenv/config";
import app from "./app.js";
import connectDB from "./configs/db.js";
const port = process.env.PORT;

const start = async () => {
  try {
    if (!port) {
      throw new Error("port is not defined on .env");
    }
    await connectDB();
    app.listen(port, () => console.log(`server run on port ${port}`));
  } catch (error) {
    console.error("server running failed", error.message);
    process.exit(1);
  }
};
start();

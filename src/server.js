import connectDB from "./configs/db.js";
import app from "./app.js";
import "dotenv/config";
const port = process.env.PORT;

const start = async () => {
  await connectDB();
  app.listen(port, () => console.log(`server run on port ${port}`));
};

start();

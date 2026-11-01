import "dotenv/config";
import connectDB from "./configs/db.js";
import app from "./app.js";
const port = process.env.PORT;

const server = async () => {
  await connectDB();
  app.listen(port, () => console.log(`server run on port ${port}`));
};
server();

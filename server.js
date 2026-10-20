import connectDB from "./src/configs/db.js";
import app from "./app.js";
import "dotenv/config";

const start = async () => {
  await connectDB();
  app.listen(process.env.PORT, () =>
    console.log(`server run on port ${process.env.PORT}`),
  );
};
start();

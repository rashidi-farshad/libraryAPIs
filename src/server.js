import "./configs/env.js";
import connectDB from "./configs/db.js";
import app from "./app.js";
const port = Number(process.env.PORT) || 3000;

const startServer = async () => {
  await connectDB();
  app.listen(port, () =>
    console.log(
      `server run ${process.env.NODE_ENV || "development"} mode on port ${port}`,
    ),
  );
};
await startServer();

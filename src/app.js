import express from "express";
import helmet from "helmet";
import userRoute from "./routes/userRoute.js";

const app = express();

app.use(helmet());
app.use(express.json());

app.use("/blog", userRoute);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  console.error(err);
  res.status(status).json({
    message: status === 500 ? "Internal server error" : err.message,
  });
});

export default app;

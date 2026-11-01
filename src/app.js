import express from "express";
import helmet from "helmet";
import cors from "cors";
import * as authRoute from "./routes/auth.js";

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/auth", authRoute);

app.use((err, req, res, next) => {
  if (err.code === 11000) {
    return res
      .status(409)
      .json({ message: "Email or username already exists" });
  }
  const status = err.status || 500;
  console.error(err);

  res.status(status).json({
    message: status === 500 ? "Internal server error" : err.message,
  });
});

export default app;

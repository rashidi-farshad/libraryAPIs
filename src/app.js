import express from "express";
import helmet from "helmet";
import userRoute from "./routes/userRoute.js";
const app = express();

app.use(helmet());
app.use(express.json());

app.use("/api/blog", userRoute);

app.use((req, res) => {
  res.status(404).json({ message: "route not found" });
});

app.use((err, req, res, next) => {
  let status = err.statusCode || 500;
  res.status(status).json({
    message: status === 500 ? "inretnal server error" : err.message,
  });
});

export default app;

import express from "express";
import userRouter from "./src/routes/userRoute.js";
import bookRouter from "./src/routes/bookRoute.js";
import morgan from "morgan";
const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/books", bookRouter);

export default app;

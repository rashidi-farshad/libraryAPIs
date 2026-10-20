import express from "express";
import userRouter from "./src/routes/userRoute.js";
import bookRouter from "./src/routes/bookRoute.js";
const app = express();
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/books", bookRouter);

export default app;

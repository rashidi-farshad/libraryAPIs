import express from "express";
import blogRoute from "./routes/blogRoute.js";
const app = express();
app.use(express.json());

app.use("/blog", blogRoute);

export default app;

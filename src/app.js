import express from "express";
import userRoute from "./routes/userRoute.js";
import postRoute from "./routes/postRoute.js";
const app = express();
app.use(express.json());

app.use("/api", userRoute);
app.use("/api", postRoute);

export default app;

import express from "express";
import userRoute from "./routes/userRoute.js";
import postRoute from "./routes/postRoute.js";
import commentRoute from "./routes/commentRoute.js";
const app = express();
app.use(express.json());

app.use("/api", userRoute);
app.use("/api", postRoute);
app.use("/api", commentRoute);

export default app;

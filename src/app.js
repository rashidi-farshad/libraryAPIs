import express from "express";
import userRoute from "./routes/userRoute.js";
import postRoute from "./routes/postRoute.js";
import commentRoute from "./routes/commentRoute.js";
import uploadRoute from "./routes/uploadsRoute.js";
const app = express();
app.use(express.json());

app.use("/api", userRoute);
app.use("/api", postRoute);
app.use("/api", commentRoute);
app.use("/api", uploadRoute);

export default app;

import express from "express";
import userRouter from "./src/routes/userRoute.js";
import bookRouter from "./src/routes/bookRoute.js";
import courseRouter from "./src/routes/couseRoute.js";
import morgan from "morgan";
import path from "path";
const app = express();

app.use(morgan("dev"));

app.use(express.json());

// app.use("/", (req, res) => {
//   res.sendFile(path.join(process.cwd(), "src", "views", "index.html"));
// }); // send html pages with path

app.use("/api/users", userRouter);
app.use("/api/books", bookRouter);
app.use("/api/courses", courseRouter);

export default app;

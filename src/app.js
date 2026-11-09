import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookiesRouter from "./routes/cookie.js";
import cookieParser from "cookie-parser";
const app = express();

app.use(cookieParser());
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/cookies", cookiesRouter);

export default app;

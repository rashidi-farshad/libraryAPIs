import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import cookiesRouter from "./routes/cookie.js";
import authRouter from "./routes/auth.js";
const app = express();

app.use(cookieParser());
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/cookies", cookiesRouter);
app.use("/auth", authRouter);

export default app;

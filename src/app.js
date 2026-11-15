import express from "express";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
import otpRoute from "./modules/otp/otp.route.js";
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(cors());

app.use("/otp", otpRoute);

export default app;

import express from "express";
import corsConfig from "./configs/cors.js";
import authRoutes from "./modules/auth/auth.route.js";
import errorHandler from "./middlewares/errorHandler.js";
const app = express();

//* CORS Configuration
app.use(corsConfig);

//* Body Parsing
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: "2mb" }));

//* routes
app.use("/auth", authRoutes);

//* Not Found Handler
app.use((req, res, next) => {
  const error = new Error(`this path not found: ${req.path}`);
  error.status = 404;
  next(error);
});

// todo: error handler
app.use(errorHandler);

export default app;

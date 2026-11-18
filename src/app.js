import express from "express";
import corsConfig from "./middlewares/cors.js";
const app = express();

//* CORS Configuration
app.use(corsConfig);

//* Body Parsing
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: "2mb" }));

//* Not Found Handler
app.use((req, res) => {
  console.error(`this path not found: ${req.path}`);
  return res.status(404).json({
    message: "404 not found",
  });
});

// todo: error handler

export default app;

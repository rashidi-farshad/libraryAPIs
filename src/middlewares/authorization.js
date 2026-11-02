import jwt from "jsonwebtoken";
import userModel from "../models/user.js";
import "dotenv/config";

const authorization = async (req, res, next) => {
  const authHeader = req.header("Authorization");

  if (!authHeader) {
    return res.status(401).json({
      message: "Authorization token is required",
    });
  }

  const authParts = authHeader.split(" ");
  if (authParts.length !== 2 || authParts[0] !== "Bearer" || !authParts[1]) {
    return res.status(401).json({
      message: "invalid Authorization format",
    });
  }

  try {
    const token = authParts[1];
    const jwtPayload = jwt.verify(token, process.env.JWT_SECRET);

    const user = await userModel.findById(jwtPayload.id);
    if (!user) {
      return res.status(401).json({
        message: "user not found",
      });
    }
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "invalid or expired token",
    });
  }
};

export default authorization;

import jwt from "jsonwebtoken";

export const generateAccessToken = (userId) => {
  const token = jwt.sign({ id: userId }, process.env.JWT_ACCESS_SECRET, {
    expiresIn: "15m",
  });
  return token;
};

export const generateRefreshToken = (userId) => {
  const token = jwt.sign({ id: userId }, process.env.JWT_REFRESH_SECRET, {
    expiresIn: "30d",
  });
  return token;
};

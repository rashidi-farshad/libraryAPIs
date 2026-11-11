import jwt from "jsonwebtoken";

export const generageAccessToken = (userId) => {
  const token = jwt.sign({ id: userId }, process.env.JWT_ACCESS_SECRET, {
    expiresIn: "30s",
  });
  return token;
};

export const generageRefreshToken = (userId) => {
  const token = jwt.sign({ id: userId }, process.env.JWT_REFRESH_SECRET, {
    expiresIn: "7d",
  });
  return token;
};

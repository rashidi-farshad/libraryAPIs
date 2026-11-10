import jwt from "jsonwebtoken";

const authorization = (req, res, next) => {
  const header = req.header("Authorization");
  if (!header) {
    return res.status(401).json({ message: "Token required" });
  }

  const headerParts = header.split(" ");

  if (headerParts[0] !== "Bearer" || !headerParts[1]) {
    return res.status(401).json({
      message: "The token is not valid.",
    });
  }

  try {
    const decoded = jwt.verify(headerParts[1], process.env.JWT_SECRET);
    req.user = decoded;
  } catch {
    return res.status(401).json({
      message: "The token is not valid.",
    });
  }
  next();
};

export default authorization;

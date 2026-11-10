import express from "express";
const router = express.Router();

router.post("/set", (req, res) => {
  res.cookie("isLogin", true, {
    httpOnly: true,
    secure: true,
    maxAge: 5000,
    signed: true,
  });
  res.status(200).json({
    message: "cookie set successfully",
  });
});
router.get("/get", (req, res) => {
  console.log("cookies => ", req.cookies);
  res.send("ok");
});
router.delete("/clear", (req, res) => {
  for (let property in req.cookies) {
    res.clearCookie(property);
  }
  res.status(200).json({
    message: "cookies clear",
  });
});

export default router;

import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "src/uploads/");
  },
  filename: function (req, file, cb) {
    const filename = Date.now() + Math.random();
    const ext = path.extname(file.originalname);
    cb(null, `${filename}${ext}`);
  },
});

const uploader = multer({ storage });
export default uploader;

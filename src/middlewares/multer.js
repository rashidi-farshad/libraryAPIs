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

const maxSize = 3 * 1000 * 1000;

const fileFilter = (req, file, cb) => {
  const validFormats = ["image/jpg", "image/jpeg", "image/png"];
  if (validFormats.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("invalid format"));
  }
};

const uploader = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: maxSize,
  },
});
export default uploader;

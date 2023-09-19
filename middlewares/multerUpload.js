const multer = require("multer");
const { dirPath } = require("../helpers/filesTools");

const multerConfig = multer.diskStorage({
  destination: dirPath.tmp,
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: multerConfig });

module.exports = {
  upload,
};

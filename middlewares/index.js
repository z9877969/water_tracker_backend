const validateUser = require("./validation/validateUser");
const authorization = require("./authorization");
const { upload } = require("./multerUpload");

module.exports = {
  validateUser,
  authorization,
  upload,
};

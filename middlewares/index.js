const validateUser = require("./validation/validateUser");
const validateWater = require("./validation/validateWater");
const authorization = require("./authorization");
const { upload } = require("./multerUpload");

module.exports = {
  validateUser,
  validateWater,
  authorization,
  upload,
};

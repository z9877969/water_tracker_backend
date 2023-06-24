const { User } = require("./user/user");
const userValidationSchemas = require("./user/userValidationSchemas");
const Water = require("./water/water");
const waterValidationSchemas = require("./water/waterValidationSchemas");

module.exports = {
  User,
  userValidationSchemas,
  Water,
  waterValidationSchemas,
};

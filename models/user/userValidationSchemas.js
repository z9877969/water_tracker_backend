const Joi = require("joi");
const { userSchemaConstants: constants } = require("../../constants");

const authUserValidationSchema = Joi.object({
  email: Joi.string().pattern(constants.EMAIL_REGEX).required(),
  password: Joi.string()
    .min(constants.PASSWORD_LENGTH.MIN)
    .max(constants.PASSWORD_LENGTH.MAX),
});

const updateUserInfoValidationSchema = Joi.object({
  email: Joi.string().pattern(constants.EMAIL_REGEX),
  password: Joi.string()
    .min(constants.PASSWORD_LENGTH.MIN)
    .max(constants.PASSWORD_LENGTH.MAX),
  oldPassword: Joi.string()
    .min(constants.PASSWORD_LENGTH.MIN)
    .max(constants.PASSWORD_LENGTH.MAX),
  name: Joi.string().max(constants.MAX_NAME_LENGTH),
  gender: Joi.string().valid(constants.GENDER.MAIL, constants.GENDER.FEMAIL),
});

module.exports = {
  authUser: authUserValidationSchema,
  updateUserInfo: updateUserInfoValidationSchema,
};

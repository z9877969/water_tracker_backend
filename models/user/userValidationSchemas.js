const Joi = require("joi");
const {
  userSchema: constants,
  waterSchema: { WATER_VOLUME },
  regex: { EMAIL_REGEX },
} = require("../../constants");

const authUserValidationSchema = Joi.object({
  email: Joi.string().pattern(EMAIL_REGEX).required(),
  password: Joi.string()
    .min(constants.PASSWORD_LENGTH.MIN)
    .max(constants.PASSWORD_LENGTH.MAX),
});

const updateUserInfoValidationSchema = Joi.object({
  email: Joi.string().pattern(EMAIL_REGEX),
  password: Joi.string()
    .min(constants.PASSWORD_LENGTH.MIN)
    .max(constants.PASSWORD_LENGTH.MAX),
  oldPassword: Joi.string()
    .min(constants.PASSWORD_LENGTH.MIN)
    .max(constants.PASSWORD_LENGTH.MAX),
  name: Joi.string().max(constants.MAX_NAME_LENGTH),
  gender: Joi.string().valid(constants.GENDER.MAIL, constants.GENDER.FEMAIL),
});

const updateWaterRateSchema = Joi.object({
  waterRate: Joi.number().min(WATER_VOLUME.MIN).max(WATER_VOLUME.MAX),
});

module.exports = {
  authUser: authUserValidationSchema,
  updateUserInfo: updateUserInfoValidationSchema,
  updateWaterRate: updateWaterRateSchema,
};

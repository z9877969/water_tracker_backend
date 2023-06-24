const Joi = require("joi");
const {
  waterSchema: { WATER_VOLUME },
  regex: { MONTH_FORMAT_REGEX },
} = require("../../constants");

const addWaterNoteValidationSchema = Joi.object({
  waterVolume: Joi.number()
    .min(WATER_VOLUME.MIN)
    .max(WATER_VOLUME.MAX)
    .required(),
  date: Joi.date().required(),
});

const updateWaterNoteValidationSchema = Joi.object({
  waterVolume: Joi.number().min(WATER_VOLUME.MIN).max(WATER_VOLUME.MAX),
  date: Joi.date(),
});

const getWaterStatsMonthValidationFormat = Joi.object({
  month: Joi.string().pattern(MONTH_FORMAT_REGEX).required().messages({
    "string.pattern.base": "month format must be 'YYYY-MM'",
    "any.required": "Month is required",
  }),
});

module.exports = {
  addWaterNote: addWaterNoteValidationSchema,
  updateWaterNote: updateWaterNoteValidationSchema,
  getWaterStatsMonthFormat: getWaterStatsMonthValidationFormat,
};

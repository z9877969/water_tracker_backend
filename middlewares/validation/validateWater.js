const { waterValidationSchemas: schema } = require("../../models");
const { createError } = require("../../helpers");

const validateWaterNoteAdding = async (req, res, next) => {
  try {
    const { error } = await schema.addWaterNote.validate(req.body);
    if (error) {
      throw createError(400, error.message);
    }
    next();
  } catch (error) {
    next(error);
  }
};

const validateWaterNoteUpdating = async (req, res, next) => {
  try {
    const { error } = await schema.updateWaterNote.validate(req.body);
    if (error) {
      throw createError(400, error.message);
    }
    next();
  } catch (error) {
    next(error);
  }
};

const validateWaterStatsMonthFormatGetting = async (req, res, next) => {
  try {
    const { month } = req.params;
    const { error } = schema.getWaterStatsMonthFormat.validate({ month });
    if (error) {
      throw createError(400, error.message);
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addWaterNote: validateWaterNoteAdding,
  updateWaterNote: validateWaterNoteUpdating,
  getWaterStatsMonthFormat: validateWaterStatsMonthFormatGetting,
};

const { createError } = require("../../helpers/error");
const { userValidationSchemas: schemas } = require("../../models");

const validateUserInfoUpdating = async (req, res, next) => {
  try {
    const { error } = await schemas.updateUserInfo.validate(req.body);

    if (error) {
      throw createError(400, error.message);
    }

    next();
  } catch (error) {
    next(error);
  }
};

const validateWaterRateUpdating = async (req, res, next) => {
  try {
    const { error } = await schemas.updateWaterRate.validate(req.body);
    if (error) {
      throw createError(400, error.message);
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  updateUserInfo: validateUserInfoUpdating,
  updateWaterRate: validateWaterRateUpdating,
};

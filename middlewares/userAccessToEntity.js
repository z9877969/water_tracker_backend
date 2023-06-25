const getHasUserAccessToEntity = require("../helpers/getHasUserAcessToEntity");

const userAccessToEntity = (model, entityName) => async (req, res, next) => {
  try {
    const { user, params } = req;
    await getHasUserAccessToEntity(user._id, model, params.id, entityName);
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = userAccessToEntity;

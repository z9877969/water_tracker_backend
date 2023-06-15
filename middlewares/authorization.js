const { createError, tokenTools, updateError } = require("../helpers");
const { User } = require("../models");

const authorization = async (req, res, next) => {
  try {
    const [bearer, token] = req.headers.authorization.split(" ");

    if (bearer !== "Bearer" || !token) {
      throw createError(401, "Not authorized");
    }

    try {
      const { id } = await tokenTools.verifyAccessToken(token);

      if (!id) {
        throw createError(401, "Not authorized");
      }

      const user = await User.findById(id);

      req.user = user;

      next();
    } catch (error) {
      throw updateError(404, error);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = authorization;

const { createError, tokenTools, updateError } = require("../helpers");
const { User } = require("../models");

const authorization = async (req, res, next) => {
  try {
    const [bearer, token] = req.headers.authorization.split(" ");

    if (bearer !== "Bearer" || !token) {
      throw createError(401);
    }

    try {
      const { id } = await tokenTools.verifyAccessToken(token);

      if (!id) {
        throw createError(401);
      }

      const user = await User.findById(id);

      if (!user || !user.isAuth) {
        throw createError(401);
      }

      req.user = user;

      return next();
    } catch (error) {
      throw updateError(404, error);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = authorization;

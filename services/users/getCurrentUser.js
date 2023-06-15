const { createError } = require("../../helpers");
const { User } = require("../../models");

const getCurrentUser = async (user) => {
  try {
    const userData = await User.findById(
      user._id,
      "-createdAt -password -updatedAt"
    );
    return userData;
  } catch (error) {
    throw createError(400, error.message);
  }
};

module.exports = getCurrentUser;

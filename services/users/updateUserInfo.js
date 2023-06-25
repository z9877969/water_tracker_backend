const { createError, passwordTools, updateError } = require("../../helpers");
const { User } = require("../../models");

const updateUserInfo = async (user, body) => {
  try {
    if (body.password) {
      const isPasswordCompare = await passwordTools.compare(
        body.oldPassword,
        user.password
      );
      if (!isPasswordCompare) {
        throw createError(400, "Password is not correct");
      }
      const hashedPassword = await passwordTools.hash(body.password);
      body.password = hashedPassword;
    }
    const updatedInfo = await User.findByIdAndUpdate(user._id, body, {
      new: true,
      select: "-createdAt -password -updatedAt",
    });
    return updatedInfo;
  } catch (error) {
    throw updateError(404, error);
  }
};

module.exports = updateUserInfo;

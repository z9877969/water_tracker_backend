const { updateError } = require("../../helpers");
const { User } = require("../../models");

const logoutUser = async (userId) => {
  try {
    await User.findByIdAndUpdate(userId, { isAuth: false });
    return;
  } catch (error) {
    throw updateError(400, error);
  }
};

module.exports = logoutUser;

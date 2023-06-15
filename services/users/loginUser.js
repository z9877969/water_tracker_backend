const { createError, passwordTools, tokenTools } = require("../../helpers");
const { User } = require("../../models");

const loginUser = async (body) => {
  try {
    const user = await User.findOne({ email: body.email });

    const isPasswordsCompare = user
      ? await passwordTools.compare(body.password, user.password)
      : null;

    if (!user || !isPasswordsCompare) {
      throw createError(409, "Email or password is using");
    }

    const { _id, email, gender, name, avatarUrl } = user;

    const payload = { id: user._id };

    const accessToken = tokenTools.createAccessToken(payload);
    const refreshToken = tokenTools.createRefreshToken(payload);

    return { _id, email, gender, name, avatarUrl, accessToken, refreshToken };
  } catch (error) {
    throw error;
  }
};

module.exports = loginUser;

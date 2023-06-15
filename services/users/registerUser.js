const { User } = require("../../models");

const registerUser = async (userData) => {
  try {
    const newUser = await User.create(userData);
    return newUser;
  } catch (error) {
    console.dir(error);
  }
};

module.exports = registerUser;

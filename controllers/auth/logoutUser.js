const {auth: services} = require('../../services')

const logoutUser = async (req, res, next) => {
  try {
    await services.logoutUser(user._id);
    res.json().status(204);
  } catch (error) {
    next(error);
  }
};

module.exports = logoutUser;

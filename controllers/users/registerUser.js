const { users: services } = require("../../services");

const registerUserController = async (req, res, next) => {
  try {
    const data = await services.registerUser(req.body);

    const { email } = data;
    res.status(200).json({ email });
  } catch (error) {
    next(error);
  }
};

module.exports = registerUserController;

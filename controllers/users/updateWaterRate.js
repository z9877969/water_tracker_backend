const { users: services } = require("../../services");

const updateWaterRate = async (req, res, next) => {
  try {
    const waterRate = await services.updateWaterRate(req.user, req.body);

    res.json(waterRate);
  } catch (error) {
    next(error);
  }
};

module.exports = updateWaterRate;

const { water: services } = require("../../services");

const getWaterStatsByCurrentDay = async (req, res, next) => {
  try {
    const stats = await services.getWaterStatsByCurrentDay(req.user);
    res.json(stats);
  } catch (error) {
    next(error);
  }
};

module.exports = getWaterStatsByCurrentDay;

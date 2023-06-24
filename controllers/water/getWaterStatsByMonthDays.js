const { water: services } = require("../../services");

const getWaterStatsByMonthDays = async (req, res, next) => {
  try {
    const notes = await services.getWaterStatsByMonthDays(
      req.params.month,
      req.user
    );
    res.json(notes);
  } catch (error) {
    next(error);
  }
};

module.exports = getWaterStatsByMonthDays;

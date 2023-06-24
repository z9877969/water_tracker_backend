const { format } = require("date-fns");
const { getMonthBreakPoints, updateError } = require("../../helpers");
const { Water } = require("../../models");

const getWaterStatsByMonthDays = async (month, user) => {
  try {
    const { _id, waterRate } = user;

    if (waterRate === 0) {
      throw createError(400, "Water rate must be greater than zero");
    }

    const { prev, next } = getMonthBreakPoints(month);

    const notes = await Water.aggregate([
      {
        $match: {
          date: { $gt: prev, $lt: next },
          owner: { $eq: _id },
        },
      },
      {
        $group: {
          _id: "$date",
          totalWaterVolume: { $sum: "$waterVolume" },
          waterServings: { $count: {} },
        },
      },
      {
        $project: {
          _id: 0,
          day: "$_id",
          waterPercentage: {
            $round: [
              {
                $multiply: [{ $divide: ["$totalWaterVolume", waterRate] }, 100],
              },
              0,
            ],
          },
          dayWaterRate: {
            $round: [{ $divide: [waterRate, 1000] }, 1],
          },
          waterServings: "$waterServings",
        },
      },
    ]);
    return notes.map((el) => ({ ...el, day: format(el.day, "d, MMMM") }));
  } catch (error) {
    throw updateError(400, error);
  }
};

module.exports = getWaterStatsByMonthDays;

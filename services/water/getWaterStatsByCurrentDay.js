const { getCurrentDayBreakPoints } = require("../../helpers");
const { Water } = require("../../models");

const getWaterStatsByCurrentDay = async (user) => {
  try {
    if (user.waterRate === 0) {
      throw createError(400, "Water rate must be greater than zero");
    }
    const { dayBefore, dayAfter } = getCurrentDayBreakPoints(
      user.hoursDiff || 0
    );

    const stats = await Water.aggregate([
      {
        $match: {
          owner: { $eq: user._id },
          date: { $gt: dayBefore, $lt: dayAfter },
        },
      },
      {
        $group: {
          _id: { $toString: "$owner" },
          totalWaterVolume: { $sum: "$waterVolume" },
          waterNotes: {
            $push: {
              _id: "$_id",
              waterVolume: "$waterVolume",
              date: "$date",
            },
          },
        },
      },
      {
        $project: {
          _id: 0,
          day: "$date",
          waterPercentage: {
            $round: [
              {
                $multiply: [
                  { $divide: [{ $sum: "$totalWaterVolume" }, user.waterRate] },
                  100,
                ],
              },
              0,
            ],
          },
          dayliWaterRate: {
            $round: [{ $divide: [user.waterRate, 1000] }, 1],
          },
          waterNotes: "$waterNotes",
        },
      },
    ]);
    return stats[0] || null;
  } catch (error) {
    throw error;
  }
};

module.exports = getWaterStatsByCurrentDay;

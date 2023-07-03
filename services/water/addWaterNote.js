const { getHoursDiff } = require("../../helpers");
const { Water, User } = require("../../models");

const addWaterNote = async (user, body) => {
  try {
    const hoursDiff = getHoursDiff(body.date);
    if (user.hoursDiff !== hoursDiff) {
      await User.findByIdAndUpdate(user._id, {
        hoursDiff,
      });
    }

    const newWaterNote = await Water.create({
      ...body,
      owner: user._id,
    });

    const { _id, date, waterVolume, owner } = newWaterNote;
    return { _id, date, waterVolume, owner };
  } catch (error) {
    throw error;
  }
};

module.exports = addWaterNote;

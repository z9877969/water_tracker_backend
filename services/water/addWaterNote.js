const { updateError } = require("../../helpers");
const { Water } = require("../../models");

const addWaterNote = async (user, body) => {
  try {
    const waterNote = { ...body, owner: user._id };
    const newWaterNote = await Water.create(waterNote);
    const { _id, date, waterVolume, owner } = newWaterNote;
    return { _id, date, waterVolume, owner };
  } catch (error) {
    throw updateError(400, error);
  }
};

module.exports = addWaterNote;

const { updateError, createError } = require("../../helpers");
const { Water } = require("../../models");

const updateWaterNote = async (id, body, owner) => {
  try {
    const waterNote = await Water.findById(id);
    if (!waterNote) {
      throw createError(404, "Note was not found");
    }
    if (String(waterNote.owner) !== String(owner)) {
      throw createError(403);
    }

    const updatedWaterNote = await Water.findByIdAndUpdate(id, body);

    return updatedWaterNote;
  } catch (error) {
    throw updateError(400, error);
  }
};

module.exports = updateWaterNote;

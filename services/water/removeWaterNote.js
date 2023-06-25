const { updateError, createError } = require("../../helpers");
const { Water } = require("../../models");

const removeWaterNote = async (id, owner) => {
  try {
    const waterNote = await Water.findById(id);

    if (!waterNote) {
      throw createError(404, "Note was not found");
    }
    if (String(waterNote.owner) !== String(owner)) {
      throw createError(403);
    }
    return await Water.findByIdAndRemove(id);
  } catch (error) {
    throw updateError(404, error);
  }
};

module.exports = removeWaterNote;

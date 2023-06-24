const { updateError, createError } = require("../../helpers");
const { Water } = require("../../models");

const updateWaterNote = async (id, body) => {
  try {
    const updatedWaterNote = await Water.findByIdAndUpdate(id, body);
    if (!updatedWaterNote) {
      throw createError(404, "Not found note");
    }
    return updatedWaterNote;
  } catch (error) {
    throw updateError(400, error);
  }
};

module.exports = updateWaterNote;

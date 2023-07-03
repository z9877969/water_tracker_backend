const { updateError } = require("../../helpers");
const { Water } = require("../../models");

const removeWaterNote = async (id) => {
  try {
    return await Water.findByIdAndRemove(id);
  } catch (error) {
    throw updateError(404, error);
  }
};

module.exports = removeWaterNote;

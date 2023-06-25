const { updateError, getHasUserAcessToEntity } = require("../../helpers");
const { Water } = require("../../models");

const updateWaterNote = async (id, body) => {
  try {
    const updatedWaterNote = await Water.findByIdAndUpdate(id, body);

    return updatedWaterNote;
  } catch (error) {
    throw updateError(400, error);
  }
};

module.exports = updateWaterNote;

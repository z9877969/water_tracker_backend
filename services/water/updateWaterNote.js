const { Water } = require("../../models");

const updateWaterNote = async (id, body) => {
  try {
    const updatedWaterNote = await Water.findByIdAndUpdate(id, body, {
      select: "-__v",
      new: true,
    });

    return updatedWaterNote;
  } catch (error) {
    throw error;
  }
};

module.exports = updateWaterNote;

const { createError } = require("../../helpers");
const { water: services } = require("../../services");

const removeWaterNote = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      throw createError(400);
    }

    await services.removeWaterNote(id, req.user._id);
    res.status(204).json();
  } catch (error) {
    next(error);
  }
};

module.exports = removeWaterNote;

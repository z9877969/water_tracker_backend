const { water: services } = require("../../services");

const removeWaterNote = async (req, res, next) => {
  try {
    await services.removeWaterNote(id);
    res.status(204).json();
  } catch (error) {
    next(error);
  }
};

module.exports = removeWaterNote;

const { createError } = require("../../helpers");
const { water: servises } = require("../../services");

const updateWaterNote = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      throw createError(404, "Note not found");
    }
    const updatedWaterNote = await servises.updateWaterNote(id, req.body);
    res.json(updatedWaterNote);
  } catch (error) {
    next(error);
  }
};

module.exports = updateWaterNote;

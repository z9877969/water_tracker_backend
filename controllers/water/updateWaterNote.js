const { createError } = require("../../helpers");
const { water: servises } = require("../../services");

const updateWaterNote = async (req, res, next) => {
  try {
    const { id } = req.params;

    const updatedWaterNote = await servises.updateWaterNote(
      id,
      req.body,
      req.user._id
    );
    res.json(updatedWaterNote);
  } catch (error) {
    next(error);
  }
};

module.exports = updateWaterNote;

const { water: services } = require("../../services");

const updateWaterNote = async (req, res, next) => {
  try {
    const { id } = req.params;

    const updatedWaterNote = await services.updateWaterNote(id, req.body);

    res.json(updatedWaterNote);
  } catch (error) {
    next(error);
  }
};

module.exports = updateWaterNote;

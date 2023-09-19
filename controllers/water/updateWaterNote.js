const { water: services } = require("../../services");

const updateWaterNote = async (req, res, next) => {
  try {
    const { id } = req.params;

    console.log(req.body);

    const updatedWaterNote = await services.updateWaterNote(id, req.body);
    console.log("ctrl", updatedWaterNote);
    res.json(updatedWaterNote);
  } catch (error) {
    next(error);
  }
};

module.exports = updateWaterNote;

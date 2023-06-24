const { water: services } = require("../../services");

const addWaterNote = async (req, res, next) => {
  try {
    const waterNote = await services.addWaterNote(req.user, req.body);
    res.status(201).json(waterNote);
  } catch (error) {
    next(error);
  }
};

module.exports = addWaterNote;

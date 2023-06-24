const { Schema, model } = require("mongoose");
const { waterSchema: constants, regex } = require("../../constants");

const waterSchema = Schema({
  waterVolume: {
    type: Number,
    min: constants.WATER_VOLUME.MIN,
    max: constants.WATER_VOLUME.MAX,
    required: true,
  },
  date: {
    type: Schema.Types.Date,
    required: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
});

const Water = model("water", waterSchema);

module.exports = Water;

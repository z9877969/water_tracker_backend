const { Schema, model } = require("mongoose");

const categorySchema = Schema({
  id: { type: Schema.Types.ObjectId },
  category: {
    type: String,
  },
});

const Category = model("category", categorySchema);

module.exports = Category;

const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { userSchemaConstants: constants } = require("../../constants");

const userSchema = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: constants.EMAIL_REGEX,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minLength: 8,
      maxLength: 64,
    },
    name: {
      type: String,
      maxLength: constants.MAX_NAME_LENGTH,
      default: null,
    },
    gender: {
      type: String,
      enum: [constants.GENDER.MAIL, constants.GENDER.FEMAIL],
      default: constants.GENDER.MAIL,
    },
    avatarUrl: {
      type: String,
      require: true,
      default: "https://some.url.com/path/to/default/avatar",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const User = model("user", userSchema);

module.exports = {
  User,
};

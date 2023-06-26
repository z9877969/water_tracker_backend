const { Schema, model } = require("mongoose");
const { userSchema: constants, regex } = require("../../constants");

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: regex.EMAIL_REGEX,
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
    waterRate: {
      type: Number,
      required: true,
      default: 0,
    },
    hoursDiff: {
      type: Number,
      default: 0,
    },
    isAuth: {
      type: Boolean,
      require: true,
      default: false,
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

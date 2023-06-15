const GENDER = {
  MAIL: "mail",
  FEMAIL: "femail",
};
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const PASSWORD_LENGTH = {
  MIN: 8,
  MAX: 64,
};
const MAX_NAME_LENGTH = 32;

module.exports = {
  GENDER,
  EMAIL_REGEX,
  PASSWORD_LENGTH,
  MAX_NAME_LENGTH,
};

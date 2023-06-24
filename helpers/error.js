const messages = {
  400: "Bad Request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not found",
  409: "Conflict",
};

const createError = (status, message = messages[status]) => {
  const newError = new Error(message);
  newError.status = status;
  return newError;
};

const updateError = (status, error) => {
  if (!error.status) {
    error.status = status;
  }
  return error;
};

module.exports = {
  createError,
  updateError,
};

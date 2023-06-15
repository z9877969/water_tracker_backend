const createError = (status, message) => {
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

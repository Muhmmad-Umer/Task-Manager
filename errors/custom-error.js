class CustomAPIError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}
const createCustomError = (msg, errorCode) => {
  return new CustomAPIError(msg, errorCode);
};

module.exports = { createCustomError, CustomAPIError };

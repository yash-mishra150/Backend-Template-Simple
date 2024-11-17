const logger = require('./logger');

// Global error handler
const errorHandler = (err, req, res, next) => {
  // Log the error
  logger.logError(err);

  // Set status code based on error type
  const statusCode = err.statusCode || 500;

  // Send error response
  res.status(statusCode).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
};

module.exports = errorHandler;

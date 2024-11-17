const fs = require('fs');
const path = require('path');

// Define log file path
const logFilePath = path.join(__dirname, 'app.log');

// Utility function to write logs to a file
const logToFile = (message) => {
  fs.appendFile(logFilePath, message + '\n', (err) => {
    if (err) console.error('Error writing log to file:', err);
  });
};

// Logger function for different log levels
const log = (message) => {
  const timestamp = new Date().toISOString();
  const formattedMessage = `[${timestamp}] ${message}`;

  // Log to console
  console.log(formattedMessage);

  // Log to file
  logToFile(formattedMessage);
};

const logError = (error) => {
  const timestamp = new Date().toISOString();
  const formattedError = `[${timestamp}] ERROR: ${error.message || error}`;

  // Log to console
  console.error(formattedError);

  // Log to file
  logToFile(formattedError);
};

const logWarn = (warning) => {
  const timestamp = new Date().toISOString();
  const formattedWarning = `[${timestamp}] WARNING: ${warning}`;

  // Log to console
  console.warn(formattedWarning);

  // Log to file
  logToFile(formattedWarning);
};

module.exports = {
  log,
  logError,
  logWarn,
};

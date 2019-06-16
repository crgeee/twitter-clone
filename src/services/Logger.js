/* eslint-disable no-console */
import LOG_LEVELS from '../constants/logging';

function logToConsole({ logType, msg, ...logObj }) {
  if (console[logType]) {
    console[logType](msg, logObj);
  } else {
    console.log(msg, logObj);
  }
}

function logToLogger(logger, { logType, msg, ...logObj }) {
  if (logger[logType]) {
    logger[logType](msg, logObj);
  } else {
    console.warn('Logger method not found.');
    console.log(msg, logObj);
  }
}

class Logger {
  constructor() {
    this.logger = null;
  }

  init(logger) {
    if (!this.logger) {
      this.logger = logger;
    }
  }

  debug(msg, ...logObj) {
    this.log({ logType: LOG_LEVELS.DEBUG, msg, ...logObj });
  }

  error(msg, ...logObj) {
    this.log({ logType: LOG_LEVELS.ERROR, msg, ...logObj });
  }

  info(msg, ...logObj) {
    this.log({ logType: LOG_LEVELS.INFO, msg, ...logObj });
  }

  warn(msg, ...logObj) {
    this.log({ logType: LOG_LEVELS.WARN, msg, ...logObj });
  }

  log(logObj) {
    if (!this.logger) {
      logToConsole(logObj);
    } else {
      logToLogger(this.logger, logObj);
    }
  }
}

export default new Logger();

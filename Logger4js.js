const log4js = require("log4js");
const allure = require("allure-commandline");

log4js.configure({
  appenders: {
    console: { type: "console" },
    file: { 
      type: "file", 
      filename: "logs/testLog.log", 
      maxLogSize: 5 * 1024 * 1024, 
      backups: 3, 
      compress: true 
    }
  },
  categories: {
    default: { appenders: ["console", "file"], level: "info" }
  }
});

const logger = log4js.getLogger();

function logAllureStep(message, allureLevel = "info") {
  // Log the message to the console
  switch (allureLevel.toLowerCase()) {
    case "debug":
      logger.debug(message);
      break;
    case "info":
      logger.info(message);
      break;
    case "warn":
      logger.warn(message);
      break;
    case "error":
      logger.error(message);
      break;
    default:
      logger.info(message);
      break;
  }

  // Log the message to Allure
  allure.createStep(message, () => {});
}

module.exports = {
  logger,
  logAllureStep
};

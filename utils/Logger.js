
// Logger.js
const log4js = require("log4js");
log4js.configure({
  appenders: { console: { type: "console" }, file: { type: "file", filename: "logs/test.log", maxLogSize: 10485760, backups: 3 } },
  categories: { default: { appenders: ["console", "file"], level: "info" } }
});
const logger = log4js.getLogger();
function logAllureStep(message) {
  logger.info(message);
  Log.Message(message);
}
module.exports = { logger, logAllureStep };

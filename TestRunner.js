
// TestRunner.js
const Config = require("./config/Config");
const { logger } = require("./utils/Logger");

function runTest(testFunc) {
  var browserType = Config.get("browser");
  Browsers.Item(browserType).Run(Config.get("url"));
  logger.info("Launched browser: " + browserType);
  testFunc();
  Browsers.CurrentBrowser.Close();
}
module.exports = { runTest };

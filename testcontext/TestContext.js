const allure = require("allure-commandline");
const logger = require("../Utils/Logger").logger;
const TestConfig = require("../Utils/TestConfig").TestConfig;

function TestContext() {
  this.config = TestConfig.getInstance();
  this.browser = null;
  this.pages = new (require("../Pages/PageManager").PageManager)();
  this.testData = {};

  // Start the browser (with Allure reporting)
  this.startBrowser = function(url) {
    try {
      logger.info(`Starting browser with URL: ${url}`);
      allure.createStep(`Start Browser with URL: ${url}`, () => {});
      this.browser = Browsers.Item(this.config.browserType);
      this.browser.Run(url);
    } catch (error) {
      logger.error(`Error starting browser: ${error.message}`);
      allure.createAttachment("Browser Error", error.message, "text/plain");
      throw error;
    }
  };

  // Stop the browser (with Allure reporting)
  this.stopBrowser = function() {
    try {
      if (this.browser) {
        logger.info("Stopping browser");
        allure.createStep("Stop Browser", () => {});
        this.browser.Close();
      }
    } catch (error) {
      logger.error(`Error stopping browser: ${error.message}`);
      allure.createAttachment("Browser Error", error.message, "text/plain");
      throw error;
    }
  };
}

module.exports.TestContext = TestContext;

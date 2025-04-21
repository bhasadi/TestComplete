
// loginTest.js
const LoginPage = require("../pages/LoginPage");
const Config = require("../config/Config");
const { logAllureStep } = require("../utils/Logger");
const { runTest } = require("../TestRunner");
function testLogin() {
  logAllureStep("Navigating to " + Config.get("url"));
  LoginPage.login(Config.get("username"), Config.get("password"));
  logAllureStep("Logged in successfully.");
}
runTest(testLogin);

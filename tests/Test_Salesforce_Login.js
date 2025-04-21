const { logAllureStep } = require("../Utils/Logger");
const TestContext = require("../Context/TestContext").TestContext;

function Test_Salesforce_Login() {
  var context = new TestContext();
  var loginPage = context.pages.getLoginPage();
  var homePage = context.pages.getHomePage();

  try {
    logAllureStep("Test Started: Salesforce Login", "info");
    
    context.startBrowser("https://login.salesforce.com/");
    
    logAllureStep("Logging in with valid credentials", "info");
    loginPage.login("testuser@example.com", "password123");
    
    if (homePage.isProfileIconVisible()) {
      logAllureStep("Login successful", "info");
    } else {
      logAllureStep("Login failed - Profile icon not visible", "warn");
    }
  } catch (error) {
    logAllureStep(`Test failed with error: ${error.message}`, "error");
    throw error;
  } finally {
    context.stopBrowser();
    logAllureStep("Test finished: Salesforce Login", "info");
  }
}

module.exports.Test_Salesforce_Login = Test_Salesforce_Login;

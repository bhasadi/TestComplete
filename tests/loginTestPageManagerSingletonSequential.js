var PageManager = require("../Pages/PageManager").PageManager;
var pages = PageManager.getInstance();

function Test_Salesforce_Login() {
  Browsers.Item(btChrome).Run("https://login.salesforce.com/");

  pages.getLoginPage().login("testuser@example.com", "password123");

  if (pages.getHomePage().isProfileIconVisible()) {
    Log.Message("Login successful");
  } else {
    Log.Error("Login failed");
  }
}

module.exports.Test_Salesforce_Login = Test_Salesforce_Login;

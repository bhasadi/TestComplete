var PageManager = require("../Pages/PageManager").PageManager;
var pages = new PageManager();

function Test_Salesforce_Login() {
  // Launch a new browser instance for this test
  Browsers.Item(btEdge).Run("https://login.salesforce.com/");

  pages.getLoginPage().login("testuser@example.com", "password123");

  if (pages.getHomePage().isProfileIconVisible()) {
    Log.Message("Login successful");
  } else {
    Log.Error("Login failed");
  }
}

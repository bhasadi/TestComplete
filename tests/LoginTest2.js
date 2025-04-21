var LoginPage = require("../Pages/LoginPage").LoginPage;
var HomePage = require("../Pages/HomePage").HomePage;

function Test_Salesforce_Login() {
  var loginPage = new LoginPage();
  var homePage = new HomePage();

  Browsers.Item(btChrome).Run("https://login.salesforce.com/");

  loginPage.login("testuser@example.com", "password123");

  if (homePage.isProfileIconVisible()) {
    Log.Message("Login successful");
  } else {
    Log.Error("Login failed");
  }
}

module.exports.Test_Salesforce_Login = Test_Salesforce_Login;

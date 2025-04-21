var LoginPage = require("./LoginPage").LoginPage;
var HomePage = require("./HomePage").HomePage;
var AccountPage = require("./AccountPage").AccountPage;

function PageManager() {
  var loginPageInstance = null;
  var homePageInstance = null;
  var accountPageInstance = null;

  this.getLoginPage = function() {
    if (!loginPageInstance) {
      loginPageInstance = new LoginPage();
    }
    return loginPageInstance;
  };

  this.getHomePage = function() {
    if (!homePageInstance) {
      homePageInstance = new HomePage();
    }
    return homePageInstance;
  };

  this.getAccountPage = function() {
    if (!accountPageInstance) {
      accountPageInstance = new AccountPage();
    }
    return accountPageInstance;
  };
}

module.exports.PageManager = PageManager;

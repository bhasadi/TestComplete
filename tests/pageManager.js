var LoginPage = require("./LoginPage").LoginPage;
var HomePage = require("./HomePage").HomePage;
var AccountPage = require("./AccountPage").AccountPage;

function PageManager() {
  this.getLoginPage = function() {
    return new LoginPage();
  };

  this.getHomePage = function() {
    return new HomePage();
  };

  this.getAccountPage = function() {
    return new AccountPage();
  };
}

module.exports.PageManager = PageManager;

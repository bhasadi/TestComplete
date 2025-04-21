var LoginPage = require("./LoginPage").LoginPage;
var HomePage = require("./HomePage").HomePage;
var AccountPage = require("./AccountPage").AccountPage;

var PageManager = (function() {
  var instance;

  function createInstance() {
    var loginPageInstance = new LoginPage();
    var homePageInstance = new HomePage();
    var accountPageInstance = new AccountPage();

    return {
      getLoginPage: function() {
        return loginPageInstance;
      },
      getHomePage: function() {
        return homePageInstance;
      },
      getAccountPage: function() {
        return accountPageInstance;
      }
    };
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

module.exports.PageManager = PageManager;

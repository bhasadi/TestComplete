
// LoginPage.js
const BasePage = require("./BasePage");
function LoginPage() {
  BasePage.call(this);
  this.usernameField = Aliases.browser.pageLogin.textboxUsername;
  this.passwordField = Aliases.browser.pageLogin.textboxPassword;
  this.loginButton = Aliases.browser.pageLogin.buttonLogin;

this.usernameField = function() {
    return Aliases.browser.pageLogin.textboxUsername;
  };

  this.passwordField = function() {
    return Aliases.browser.pageLogin.textboxPassword;
  };

  this.loginButton = function() {
    return Aliases.browser.pageLogin.buttonLogin;
  };
  
  this.login = function(username, password) {
    this.setText(this.usernameField, username);
    this.setText(this.passwordField, password);
    this.loginButton.ClickButton();
  };
}
module.exports = new LoginPage();

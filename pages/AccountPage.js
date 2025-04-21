var BasePage = require("./BasePage").BasePage;

function AccountPage() {
  BasePage.call(this);

  this.newAccountButton = function() {
    return Aliases.browser.pageAccounts.buttonNewAccount;
  };

  this.accountNameField = function() {
    return Aliases.browser.pageAccounts.textboxAccountName;
  };

  this.saveButton = function() {
    return Aliases.browser.pageAccounts.buttonSave;
  };

  this.createNewAccount = function(accountName) {
    this.clickElement(this.newAccountButton());
    this.setText(this.accountNameField(), accountName);
    this.clickElement(this.saveButton());
  };
}

module.exports.AccountPage = AccountPage;


// BasePage.js
function BasePage() {
  
  this.setText = function(element, text) {
    if (this.waitForElement(element)) {
      element.SetText(text);
    }
  };
  
  this.clickElement = function(element) {
    element.Click();
  };  

  this.getText = function(element) {
    return element.contentText;
  };


  this.isElementVisible = function(element) {
    return element.Exists && element.VisibleOnScreen;
  };
  
  this.waitForElement = function(element, timeout) {
    timeout = timeout || 10000;
    var interval = 100;
    var elapsedTime = 0;

    while (elapsedTime < timeout) {
      if (element.Visible && element.Enabled) {
        return true;
      }
      Delay(interval);
      elapsedTime += interval;
    }
    Log.Error("Element not visible and enabled after " + timeout + " ms.");
    return false;
  };


}
module.exports = BasePage;


// AssertionUtils.js
function assertEquals(actual, expected, message) {
  if (actual !== expected) {
    Log.Error(message + " | Expected: " + expected + " but got: " + actual);
  } else {
    Log.Message(message + " | Passed.");
  }
}
module.exports = { assertEquals };

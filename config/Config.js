
// Config.js
const fs = require("fs");
let instance = null;

function Config() {
  if (!instance) {
    const rawdata = fs.readFileSync("config/config.json");
    const configData = JSON.parse(rawdata);
    this.get = function(key) {
      return configData[key];
    };
    instance = this;
  }
  return instance;
}
module.exports = new Config();

var LogStrategy = require("./LogStrategy");
var config = require("./config");

class Logger {
  constructor(strategy = "toConsole") {
    this.logs = [];
    this.strategy = LogStrategy[strategy];
  }

  get count() {
    return this.logs.length;
  }

  log(message) {
    const timestamp = new Date().toISOString();
    this.logs.push({ message, timestamp });
    this.strategy(timestamp, message);
  }

  changeStrategy(newStrategy) {
    this.strategy = LogStrategy[newStrategy];
  }
}

module.exports = new Logger(config.logs.strategy);

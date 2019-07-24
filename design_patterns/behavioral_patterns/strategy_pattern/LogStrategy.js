var path = require("path");
var { appendFile } = require("fs");

class LogStrategy {
  static noDate(_, message) {
    console.log(message);
  }

  static toFile(timestamp, message) {
    var fileName = path.join(__dirname, "logs.txt");
    appendFile(fileName, `${timestamp} - ${message} \n`, error => {
      if (error) {
        console.log("Error");
      }
    });
  }

  static toConsole(timestamp, message) {
    console.log(`${timestamp} - ${message}`);
  }

  static none() {}
}

module.exports = LogStrategy;

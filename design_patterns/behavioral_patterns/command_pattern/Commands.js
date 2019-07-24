var { writeFile, unlink } = require("fs");
var path = require("path");

class ExitCommand {
  get name() {
    return "Exit";
  }

  execute() {
    process.exit(0);
  }
}
class CreateCommand {
  constructor(filename, text) {
    this.filename = filename;
    this.text = text;
    this.fullPath = path.join(__dirname, filename);
  }

  get name() {
    return "Create";
  }

  execute() {
    writeFile(this.fullPath, this.text, f => f);
  }

  undo() {
    unlink(this.fullPath, f => f);
  }
}

module.exports = { ExitCommand, CreateCommand };

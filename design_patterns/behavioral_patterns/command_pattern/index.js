var Conductor = require("./Conductor");
var { ExitCommand, CreateCommand } = require("./Commands");

var { createInterface } = require("readline");
var rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("create <fileName> <text> | history | undo | redo | exit");
rl.prompt();

rl.on("line", input => {
  var [commandText, ...remaining] = input.split(" ");
  var [fileName, ...fileText] = remaining;
  var text = fileText.join(" ");

  switch (commandText) {
    case "history":
      Conductor.printHistory();
      break;
    case "undo":
      Conductor.undo();
      break;
    case "redo":
      Conductor.redo();
      break;
    case "exit":
      Conductor.run(new ExitCommand());
      break;

    case "create":
      Conductor.run(new CreateCommand(fileName, text));
      break;

    default:
      console.log(`${commandText} command not found!`);
  }

  rl.prompt();
});

var scout_prototype = require("./ScoutPrototype");

var alex = scout_prototype.clone();
alex.name = "Alex";
alex.addItemToList("slingshot");

console.log(alex.name);

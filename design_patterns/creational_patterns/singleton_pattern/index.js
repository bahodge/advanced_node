var Logger = require("./Logger");
var Shopper = require("./Shopper");
var Store = require("./Store");

Logger.log("starting app...");

var alex = new Shopper("alex", 500);
var ski_shop = new Store("Steep and Deep Supplies", [
  {
    item: "Downhill Skis",
    qty: 5,
    price: 750
  },
  {
    item: "Knit Hat",
    qty: 20,
    price: 5
  }
]);

Logger.log("finished config...");

console.log(`${Logger.count} logs total`);
Logger.logs.map(log => console.log(`   ${log.message}`));

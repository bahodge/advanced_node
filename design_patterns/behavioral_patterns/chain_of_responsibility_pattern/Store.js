var Storage = require("./Storage");

class Store {
  constructor(name, inventory = []) {
    this.name = name;
    this.inventory = inventory;

    var floor = new Storage("store floor", inventory.floor);
    var backroom = new Storage("store backroom", inventory.backroom);
    var localStore = new Storage("store localStore", inventory.localStore, 1);
    var warehouse = new Storage("store warehouse", inventory.warehouse, 5);

    floor.setNext(backroom);
    floor.setNext(localStore);
    floor.setNext(warehouse);

    this.storage = floor;
  }

  find(itemName) {
    return this.storage.find(itemName);
  }
}

module.exports = Store;

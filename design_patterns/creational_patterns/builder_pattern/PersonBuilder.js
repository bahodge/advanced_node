var Person = require("./Person");

class PersonBuilder {
  constructor(name) {
    this.name = name;
  }

  makeEmployee() {
    this.isEmployee = true;
    return this;
  }

  withMoney(amount) {
    this.money = amount;
    return this;
  }

  makeManager(hours = 40) {
    this.isManager = true;
    this.hours = hours;
    return this;
  }

  makePartTime(hours = 20) {
    this.isPartTime = true;
    this.hours = hours;
    return this;
  }

  withList(list = []) {
    this.shoppingList = list;
    return this;
  }

  build() {
    return new Person(this);
  }
}

module.exports = PersonBuilder;

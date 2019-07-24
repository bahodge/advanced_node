class Shopper {
  constructor(name) {
    this.name = name;
  }

  notify(storeName, discount) {
    console.log(`${this.name}, Sale: ${storeName}, Amount: ${discount}%`);
  }
}

module.exports = Shopper;

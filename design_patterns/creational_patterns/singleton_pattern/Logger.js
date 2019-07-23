class Logger {
  constructor() {
    this.logs = [];
  }

  get count() {
    return this.logs.length;
  }

  log(message) {
    const timestamp = new Date().toISOString();
    this.logs.push({ message, timestamp });
    console.log(`${timestamp} - ${message}`);
  }
}

// Singleton Pattern -> Only 1 instance of logger
// class Singleton {
//   constructor() {
//     if (!Singleton.instance) {
//       Singleton.instance = new Logger();
//     }
//   }

//   getInstance() {
//     return Singleton.instance;
//   }
// }

// exports logger as singleton and saves in memory
module.exports = new Logger();

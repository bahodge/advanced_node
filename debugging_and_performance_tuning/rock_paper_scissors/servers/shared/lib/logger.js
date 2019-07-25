const winston = require("winston");

const Logger = new winston.createLogger({
    format: winston.format.json(),
    transports: [
        new winston.transports.Console({
            timestamp: new Date().toISOString(),
            colorize: true,
            level: "info"
        })
    ]
});

module.exports = Logger;

const winston = require("winston");

const logger = new winston.createLogger({
    format: winston.format.json(),
    transports: [
        new winston.transports.Console({
            timestamp: new Date().toISOString(),
            colorize: true,
            level: "info"
        })
    ]
});

module.exports = logger;

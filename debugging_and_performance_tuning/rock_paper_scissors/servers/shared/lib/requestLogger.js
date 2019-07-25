const morgan = require("morgan");

const format = "dev";

// const options = {
//     stream: {
//         write: msg => logger.info(msg.trim())
//     }
// };

module.exports = morgan(format);

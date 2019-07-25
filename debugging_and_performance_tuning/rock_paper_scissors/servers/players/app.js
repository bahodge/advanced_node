const express = require("express");
const requestLogger = require("../shared/lib/requestLogger");
const expressRequestId = require("express-request-id")();

const app = express();
app.use(expressRequestId);
app.use(requestLogger);

app.set("x-powered-by", false);

app.use(express.json());

app.use(require("./router"));

module.exports = app;

const express = require("express");
const app = express();
const {resolve} = require("path");

// Modules
const public = require("./modules/public-module");
const { port, start } = require("./modules/port-module");
app.listen(port, start());
app.use(public);

//PUG
app.set("views", "./src/views");
app.set("view engine", "pug");

app.use(require('./routes/main.routes'));

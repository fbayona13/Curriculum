const express = require("express");
const app = express();
const {resolve} = require("path");

// Modules
const public = require("./modules/public-module");
const { port, start } = require("./modules/port-module");
app.listen(port, start());
app.use(public);

//EJS
app.set('views', resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(require('./routes/main.routes'));

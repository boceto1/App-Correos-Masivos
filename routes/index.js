
const express = require('express');
const app = express()

app.use(require('./vistas'));
app.use(require('./usuario'));


module.exports = app;
const express = require('express');
const noteRouter = require('./notesRouter.js');
const app = express();

app.use('/notes', noteRouter);

module.exports = app;
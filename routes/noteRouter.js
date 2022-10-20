const notesRouter = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');
const fs = require('fs');

notesRouter.get('/', (req, res) => {
    readFromFile('./db/db.json')
    .then((data) => res.json(JSON.parse(data)));
});

notesRouter.post('/', (req, res) => {
    const { title, text } = req.body;

    if (req.body) {
        const note = {
            title,
            text,
            id: uuid()
        };
        
        readAndAppend(note, './db/db.json');
        res.json('Note successfully added!')
    } else {
        res.errored('Error in writing note');
    }
    console.log('Note Saved');
})

// TODO: add code to delete notes

module.exports = notesRouter;
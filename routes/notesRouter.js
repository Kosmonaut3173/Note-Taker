const notesRouter = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');
const fs = require('fs');

// GET route for retrieving notes
notesRouter.get('/', (req, res) => {
    readFromFile('./db/db.json')
    .then((data) => res.json(JSON.parse(data)));
});

// POST route for new note
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

// DELETE route to get rid of note
notesRouter.delete('/:id', (req, res) => {
    let db = JSON.parse(fs.readFileSync('db/db.json'));
    let filteredNote = db.filter((item) => item.id !== req.params.id);

    fs.writeFileSync('db/db.json', JSON.stringify(filteredNote));
    res.json(filteredNote);
    console.log('Note successfully deleted')
})

module.exports = notesRouter;
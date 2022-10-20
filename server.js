const express = require('express');
const path = require('path');
const api = require('./routes/index');
const app = express();

const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

app.use('/api',api);
app.use('/',html);

// GET rout hor home
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname), './public/index.html')
})
// GET route for notes
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'))
})

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
})
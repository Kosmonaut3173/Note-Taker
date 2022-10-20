const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

app.use('/api',api);
app.use('/',html);

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
})
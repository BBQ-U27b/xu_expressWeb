const express = require('express');
const db =require('./lib/database.js');
const app = express();




app.get('/api/getUserById', (req, res) => {

    db.query('SELECT * FROM Mitarbeiter WHERE id = ?', [req.query.id], (err,result) => {
    res.send(result);
});
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});



app.listen(8000,() => {
    console.log('HTTP Server starting');
});

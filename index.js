const express = require('express');
const db =require('./lib/database.js');
const app = express()




app.get('/hallo', (req, res) => {

    db.query('SELECT * FROM Mitarbeiter WHERE id = ?', [req.query.id], (err, resp, fields) => {
    res.send(resp)
});
});

app.post('/hallo', (req, res) =>{
    console.log(req.body)
    res.send('Bye')
})

app.listen(8000,() => {
    console.log('HTTP Server starting')
})

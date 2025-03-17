const mysql = require('mysql2');
const fs = require('fs');

const connection = mysql.createConnection({
    host: 'u27.bbq.withgentlent.com',
    user: 'xu',
    password:'TSO3kM0JS/EUb+kA',
    database: 'beispiel_unternehmen',
    ssl: {
        ca: fs.readFileSync(__dirname + '/../certs/ca-cert.pem'),
        key: fs.readFileSync(__dirname + '/../certs/client-key.pem'),
        cert: fs.readFileSync(__dirname + '/../certs/client-cert.pem'),
        rejectUnauthorized: false,
      }
});

module.exports = connection;
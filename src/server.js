const express = require('express');
const app = express();
const path = require('path');
const filePath = path.join(__dirname,'../public');

const server = app.listen(8080, () => {
    console.log('Start Server : localhost:8080');
});

app.set('views', filePath);
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
    res.render('index.html');
});

app.get('/about', (req, res) => {
    res.render('about.html');
});





var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'example.org',
  user            : 'bob',
  password        : 'secret',
  database        : 'my_db'
});

app.get('/db', (req, res) => {
    
    pool.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
       
        connection.query('SELECT * FROM Test', function (error, results, fields) {
          res.send(JSON.stringify(results));
          console.log('results',results);
          connection.release();
          
          if (error) throw error;
       
        });
      });
    
});








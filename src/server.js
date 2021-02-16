const express = require('express');
const app = express();

const server = app.listen(8080, () => {
    console.log('8080번 포트에서 대기중입니다')
})

app.set('public', __dirname + '/public');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
    res.render('index.html')
})

app.get('/about', (req, res) => {
    res.send('about.html')
})



/*
var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'example.org',
  user            : 'bob',
  password        : 'secret',
  database        : 'my_db'
});
*/











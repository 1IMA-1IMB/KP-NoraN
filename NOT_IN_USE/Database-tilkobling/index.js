const express = require('express')
const app = express()
const port = 3000
var mysql = require('mysql');
var cors = require('cors')

app.use(cors())

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'norn_skole'
});

connection.connect(function(err) {

  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

app.get('/', (request, response) => {
    response.send(JSON.stringify('Hello World')) 
}) 

app.get('/getallstudents', (request, response) => {

  connection.query('SELECT * FROM elev', function (error, results, fields) {
    if (error) throw error;
    response.send(JSON.stringify(results));
  });

  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

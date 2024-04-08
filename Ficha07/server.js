const express = require('express')
const app = express()
const port = 3000

const fs = require('node:fs');

// Utilização Middleware
app.use(express.json());

var mysql = require ('mysql');
const { connect } = require('node:http2');
var pool = mysql.createPool({
  connectionLimit : 10,
  host : 'localhost',
  user : 'joao',
  password : 'backend',
  database : 'ficha07'
})

app.get("/persons", (req, res)=>{
  connection.query("SELECT * FROM persons", function(error, results, fields){
    if (error) throw error;
    res.send(results);
  });
});

app.delete("/persons", (req, res)=>{
  var id = req.body.id;
  connection.query("DELETE FROM ficha07.persons WHERE id = ?", [id], function(error, results, fields){
    if (error) throw error;
    res.send(results);
  });
})
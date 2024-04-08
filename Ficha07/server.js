const express = require('express')
const app = express()
const port = 3000

const fs = require('node:fs');

// Utilização Middleware
app.use(express.json());

var mysql = require ('mysql');
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

app.post("/persons", (req, res)=>{
  var values = [req.body.firstname]
  connection.query("insert into ficha7.persons(firstname, lastname, profession , age)", values, function(error, results, fields){
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

app.delete("/persons/:id", (req, res)=>{
  var id = req.params.id;
  connection.query("DELETE FROM ficha07.persons WHERE id = ?", [id], function(error, results, fields){
    if (error) throw error;
    res.send(results);
  });
})

app.get("/persons/:id", (req, res)=>{
  connection.query("SELECT * FROM persons WHERE id = ? ", function(error, results, fields){
    if (error) throw error;
    res.send(results);
  });
});

app.get("/persons/:Age/:Profession", (req, res)=>{
  connection.query("SELECT * FROM persons WHERE Age = ? AND Profession = ? ", function(error, results, fields){
    if (error) throw error;
    res.send(results);
  });
});


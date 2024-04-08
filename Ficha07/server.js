const express = require('express')
const app = express()
const port = 3000

const fs = require('node:fs');

// Utilização Middleware
app.use(express.json());

var mysql = require ('mysql');
var connection = mysql.createPool({
  connectionLimit : 10,
  host : 'localhost',
  user : 'joao',
  password : 'backend',
  database : 'ficha07'
});

app.get("/persons", (req, res)=>{
  connection.query("SELECT * FROM persons", function(error, results, fields){
    if (error) throw error;
    res.send(results);
  });
});

app.post("/persons", (req, res)=>{
  var values = [req.body.firstname, req.body.lastname, req.body.profession, req.body.age];
  connection.query("insert into ficha7.persons(Firstname, Lastname, Profession , Age)", values, function(error, results, fields){
    if (error) throw error;
    res.send("Inserted with ID: " + results.insertId);
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

app.put("/persons/:id", (req, res)=>{
  var details = req.body;
  var id = req.params.id;
  var updateStatement = "UPDATE ficha07.persons SET Firstname = ?, Lastname = ?, Profession = ?, Age = ? WHERE id = ?";
  var values = [details.firstname, details.lastname, details.profession, details.age, id];
  connection.query(updateStatement, values, function(error, results, fields){
    if (error) 
      res.status(500).send(JSON.stringify(error));
    else
      res.send("Updated Rows: " + results.affectedRows);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
const express = require('express')
const app = express()
const port = 3000
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger_output.json");

const fs = require('node:fs');

// Utilização Middleware
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));


var mysql = require ('mysql');
var connection = mysql.createPool({
  connectionLimit : 10,
  host : 'localhost',
  user : 'root',
  password : '',
  database : 'ficha07'
});

/*

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
  var id = req.params.id;
  connection.query("SELECT * FROM persons WHERE id = ? ", [id], function(error, results, fields){
    if (error) throw error;
    res.send(results);
  });
});

app.get("/persons/:Age/:Profession", (req, res)=>{
  var values = [req.params.Age, req.params.Profession];
  connection.query("SELECT * FROM persons WHERE Age = ? AND Profession = ? ", values, function(error, results, fields){
    if (error) throw error;
    res.send(results);
  });
});

app.put("/persons/:id", (req, res)=>{
  var id = req.params.id;
  var values = [req.body.firstname, req.body.lastname, req.body.profession, req.body.age, id];
  connection.query("UPDATE ficha07.persons SET Firstname = ?, Lastname = ?, Profession = ?, Age = ? WHERE id = ?", values, function(error, results, fields){
    if (error) 
      res.status(500).send(JSON.stringify(error));
    else
      res.send("Updated Rows: " + results.affectedRows);
  });
});

*/



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get("/persons", (req, res) => {
  connection.query("SELECT * FROM ficha07.persons", function(error, results, fields){
  res.send(results);
  });
});

app.post("/persons", (req, res) => {
  var id = res.insertedId;
  var values = [req.body.Firstname, req.body.Lastname, req.body.Profession, req.body.Age];
  connection.query("insert into ficha07.persons (Firstname, Lastname, Profession, Age) VALUES (?, ?, ?, ?)", values, function(error, results, fields) {
    res.send(results);
  });  
});

app.delete("/persons", (req, res) => {
  var id = req.body.id;
  connection.query("DELETE FROM ficha07.persons WHERE id = ?", [id], function(error, results, fields) {
    res.send(results);
  });
});

app.delete("/persons/:id", (req, res) => {
  var id = req.params.id;
  connection.query("DELETE FROM ficha07.persons WHERE id = ?", [id], function(error, results, fields) {
    res.send(results);
  });
});


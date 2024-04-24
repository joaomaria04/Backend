const express = require('express')
const app = express()
const port = 3000
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger_output.json");

const fs = require('node:fs');
const { Sequelize } = require('sequelize');

// Utilização Middleware
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

const sequelize = new Sequelize('ficha09', 'root', '', {
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(() => {
        console.log("Connection has been established");
    })
    .catch(err => {
        console.error("Unable to connect", err);
    });

const Person = sequelize.define('person', {
    // atributos
    Firstname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Lastname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Profession: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Age: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

sequelize.sync({ force: false })
    .then(() => {
        console.log('Database & tables created!');
    }).then(function () {
        return Person.findAll();
    }).then(function (persons) {
        console.log(persons);
    });
/*
Person.bulkCreate([
    { Firstname: 'Joao', Lastname: 'Ferreira', Profession: 'Student', Age:20 },
    { Firstname: 'Paulo', Lastname: 'Andrade', Profession: 'IT Teacher', Age:34 },
    { Firstname: 'Henrique', Lastname: 'Freitas', Profession: 'Lumberjack', Age:43 }  
]).then(function () {
    return Person.findAll();
}).then(function (persons) {
    console.log(persons);
});   
    
*/
app.get("/persons", (req, res)=>{
  
  Person.findAll().then(persons => {
    res.send(persons);
  })

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
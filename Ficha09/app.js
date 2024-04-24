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

app.post("/persons", (req, res) => {
  var details = req.body;
  Person.create(details).then(newPerson => {
    res.send(newPerson);
  });
});

app.delete("/persons", (req, res) => {
  var id = req.body.id;
  Person.destroy({
     where: {
       id: id 
      } 
    }).then(person => {
      res.send(person);
  });
});





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



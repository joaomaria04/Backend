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


/*


const sequelize = new Sequelize('ficha09', 'root', '', {
    dialect: 'mysql'
});


*/ 


var mysql = require ('mysql2');
var connection = mysql.createPool({
  connectionLimit : 10,
  host : 'localhost',
  user : 'root',
  password : '',
  database : 'ficha09'
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



/*


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
  const id = req.body.id;
  Person.destroy({
     where: {
       id: id 
      } 
    }).then(person => {
      res.send(person);
  });
});


<<<<<<< HEAD
app.delete("/persons/:id", (req, res) => {
    var id = req.params.id;
=======
app.delete("/:id", (req, res) => {
    const id = req.params.id;
>>>>>>> 7ff0e4528d41d2b66897d64951e2041ef0c0cea4
    Person.destroy({
        where: {
            id: id
        }
<<<<<<< HEAD
    }).then(deletePerson => {
        res.send(deletePerson);
    });
});
=======
    }).then(person => {
        res.send(person);
    });
});


*/
>>>>>>> 7ff0e4528d41d2b66897d64951e2041ef0c0cea4

app.get("/persons/:id", (req, res) => {
    var id = req.params.id;
    Person.findByPk(id).then(allPersons => {
        res.send(allPersons);
    });
});

app.get("/persons/:age/:profession", (req, res) => {
    var age = req.params.age;
    var profession = req.params.profession;
    Person.findAll({
        where: {
            age: age,
            profession: profession 
        }
    }).then(persons =>{
        res.send(persons);
    });
});

app.put("/persons/:id", (req, res) => {
    var id = req.params.id;
    var body = req.body;
    Person.update({ body  }, {
        where: {
            id: id
        }
    }).then((updatePerson) => {
        res.send(updatePerson);
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



































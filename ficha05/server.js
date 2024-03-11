const express = require('express')
const app = express()
const port = 3000

const fs = require('node:fs');

// Utilização Middleware
app.use(express.json());


var Persons = readFile("./persons.json");

console.log(Persons);

function readFile(path){
    var content = fs.readFileSync(path);
    return JSON.parse(content);
}

app.get('/users', (req, res) => {
  res.send(Persons);
})

app.get('/users/:id', (req, res) => {
    var id = req.params.id;
    
    res.send(req.body);
  })

app.post('/users', (req, res) => {
    var newPerson = req.body;
    var id = Persons.data.length + 1; //Para gerar um novo id
    newPerson.id = id;
    Persons.data.push(newPerson); //Através do body do Postman, adiciona ao array data
    res.send("Foi inserido um utilizador com o id " + id);
  })
  
app.delete('/users/:id', (req, res) => {
    var id = req.params.id;
    Persons.data.filter(function(){})
    res.send("Foi apagado o utilizador com o id "+ id);
  })

app.put('/users/:id', (req, res) => {
    var id = req.params.id;
    res.send(req.body);
  })
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
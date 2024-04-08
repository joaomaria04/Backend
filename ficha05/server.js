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
    for (let i = 0; i < Persons.data.length; i++) {
      if (id > i){
      var Person = Persons.data[i];
      }
    }
    res.send(Person);
  })

app.post('/users', (req, res) => {
    var newPerson = req.body;
    var id = Persons.data.length + 1; //Para gerar um novo id
    newPerson.id = id;
    Persons.data.push(newPerson); //Através do body do Postman, adiciona ao array data
    res.send("Foi inserido um utilizador com o id " + id);
  })
  
app.delete('/users/:id', (req, res) => {
<<<<<<< Updated upstream
  var id = req.params.id;
=======
    var id = req.params.id;
    Persons.data = Persons.data.filter((user) => user.id != id); //Persons.data serve para filtrar o objeto Persons
    res.send("Foi apagado o utilizador com o id "+ id);
  })
>>>>>>> Stashed changes

  // Filter out the user with the specified ID
  Persons.data = Persons.data.filter(data => data.id !== id); //Filtra o user, que é um nome aleatório dado e o parametro que queremos filtrar que é o id

  res.send("Foi apagado o utilizador com o id " + id);
});
app.put('/users/:id', (req, res) => {
    var id = req.params.id;
    var details = req.body;
    var index = -1;
    for (let i = 0; i < Persons.data.length; i++) {
      if (id == Persons.data[i].id) {
        index = i;
      }
    }
    if (index != -1) {
      details.id = id;
      Persons.data[index] = details;
    }
    res.send("O user com o id " +id+" foi alterado com sucesso");
  })
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
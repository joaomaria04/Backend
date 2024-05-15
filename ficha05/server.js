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
  var id = req.params.id;

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


let square = width => {
  let square = "";

  // primeira linha
  for(i = 0; i < width; i++) {
      square += "*";
  }
  square += "\n";
  
  // linhas do meio
  for(i = 0; i < width-2; i++) {
      square += "*";
      for(j = 0; j < width-2; j++) {
          square += " ";
      }
      square += "*\n";
  }
  
  // ultima linha
  for(i = 0; i < width; i++) {
      square += "*";
  }
  return square;
}


var result = ""
for(i = 0; i <= width; i++) {
  for(j = 0; j <= width; j++) {
    if(i == 0 || j == 0 || j == width || i == width || i == j || i+j == width || i == width/2 || j == width/2) {
      result += "*"
    } else {
      result += " "
    }
  }
  result += "\n";
}

/*
i
*****
1*111
22*22
333*3
*****

j 
**23*
*1*3*
*12**


1 + 3 = 4
2 + 2 = 4
3 + 1 = 4

*/
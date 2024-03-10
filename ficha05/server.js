const express = require('express')
const app = express()
const port = 3000

const fs = require('node:fs');

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
    res.send(req.body);
  })
  
app.delete('/users/:id', (req, res) => {
    var id = req.params.id;
    res.send(req.body);
  })

app.put('/users/:id', (req, res) => {
    var id = req.params.id;
    res.send(req.body);
  })
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
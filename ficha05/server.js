const express = require('express')
const app = express()
const port = 3000

const fs = require('node:fs');

var Persons = readFile("./persons.json");

app.use(express.json());


function readFile(path){
    var content = fs.readFileSync(path);
    return JSON.parse(content);
}

app.get('/users', (req, res) => {
  res.send(Persons);
})

app.post('/users', (req, res) => {
    res.send(req.body);
  })
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
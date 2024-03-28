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


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
var object = '{"name": "João Ferreira", "age": 20, "gender": "Male"}';
var str_object = JSON.parse(object);


var Person = require("./person.js")
var person1 = new Person("Juan", "Pablo");
var person2 = new Person("Cristiano", "Ronaldo");
person1.age = 30;
person2.age = 31;
console.log(person1.__proto__ == person2.__proto__);
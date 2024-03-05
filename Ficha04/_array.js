var array = [];

var message1 = function() {
    return "Hello World 1";
};

var message2 = function() {
    return " 2";
};

var message3 = function() {
    return " 3";
}

/*

console.log(array);

*/

array.push(message1());
array.push(message2());
array.push(message3());
var resultado = [];

for (let i = 0; i < array.length; i++) {
    resultado += array[i];
}

console.log(resultado);
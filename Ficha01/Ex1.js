//Ex 5

function notas() {
    nota_teorica = 9.4;
    nota_pratica = 9.5
    media_notas = (nota_teorica + nota_pratica) / 2;
    if (media_notas >= 9.5) {
        console.log("O aluno está Aprovado.");
    }else {
        console.log("O aluno está Reprovado");
    }
}

//notas();

// Ex 6

function imprimir_mes(mes) {
    switch(mes) {
        case 1:
            console.log("Janeiro");
            break;
        case 2:
            console.log("Fevereiro");
            break;
        case 3:
            console.log("Março");
            break;
        case 4:
            console.log("Abril");
            break;
        case 5:
            console.log("Maio");
            break;
        case 6:
            console.log("Junho");
            break;
        case 7:
            console.log("Julho");
            break;
        case 8:
            console.log("Agosto");
            break;
        case 9:
            console.log("Setembro");
            break;
        case 10:
            console.log("Outubro");
            break;
        case 11:
            console.log("Novembro");
            break; 
        case 12:
            console.log("Dezembro");
            break;         
        default:
            console.log("Valor inválido");
            break;
        }
}

//imprimir_mes(1);

//Ex 7

function operadores(num1, num2, operador) {
    if (operador == "+") {
        console.log("A soma dos dois números é: ", num1+num2);
    }
    if (operador == "-") {
        console.log("A subtração dos dois números é: ", num1-num2);
    }
    if (operador == "/") {
        console.log("A divisão dos dois números é: ", num1/num2);
    }
    if (operador == "*") {
        console.log("A multiplicação dos dois números é: ", num1*num2);
    }
    if (operador == "^") {
        console.log("O "+num1+ " elevado a "+num2+" é: " , num1+num2);
    }
}

//operadores(2,2,"^");

//Ex 8

function multiplos_de_5() {
    for (var i = 1; i < 20; i++) {
        if (i % 5 == 0) {
            console.log(i);
        }
    }
}

//multiplos_de_5();

//Ex 9

function primeiros_100() {

    for (var i = 0; i <= 100; i++) {
        console.log("\n",i+i);
    }

}

//primeiros_100();

//Ex 10

function factorial(numero){
    var resultado = 1;
    for (var i = 1; i <= numero; i++) {
        resultado *= i;
        console.log(resultado);
    }
}

//factorial(5);

//Ex 11

function maximo(numeros) {
    var resultado = [];
    for (var i = 0; i < numeros.length; i++) {
        for (var j = 0; j < i; j++) {
            
        }
    }
}
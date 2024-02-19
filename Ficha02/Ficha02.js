function imc(peso, altura) {
    var imc = peso/(altura) ** 2;
    console.log("O seu Indice de Massa Corporal é: "+imc);
}

//imc(60, 1.60)

function frase_inversa(frase) {
    var stringReversa = "";
    var palavras = frase.split(" ");   
    for (var i = 0; i < palavras.length; i++) {
        var palavra = palavras[i];
        for (var j = palavra.length - 1; j >= 0; j--){
            var letra = palavra[j];
            stringReversa += letra;
        }
        stringReversa += " ";
    }
    return stringReversa;

}

//console.log(frase_inversa("Hoje é Domingo"));

function vogais(frase) {
    var contador = 0;
    for (var i = 0; i < frase.length; i++) {
        if (frase[i] == "a" || frase[i] == "e" || frase[i] == "i" || frase[i] == "o" || frase[i] == "u" || frase[i] == "A" || frase[i] == "E" || frase[i] == "I" || frase[i] == "O" || frase[i] == "U"){
            contador++;
        }
    }
    return contador;
}

//console.log(vogais("America e irao"));

function frase_letra(frase, letra) {
    numero_letra = 0;
    for (var i = 0; i < frase.length; i++) {
        if (letra == frase[i].toLowerCase()) {
            numero_letra++;
        }
    }
    console.log("O número de vezes que a letra se repete é: " + numero_letra);
}

//frase_letra("Natal E presentes", "e")

/*

function tempo_trabalho(hora_entrada, hora_saida) {
   
}

*/

function retangulo(altura, largura) {
    for (var i = 0; i < altura; i++) {
        var linha = "";
        for (var j = 0; j < largura; j++) {
            linha+= "*";
        }
        console.log(linha);
    }
}

//retangulo(5,10);

function triangulo(altura) {
    var controlo = "";
    for (var i = 0; i < altura; i++) {
        controlo+= "*";
        console.log(controlo);
    }
    
}

//triangulo(10);

function caixa(lado) {
    var inicio = "";
    var fim = "";
    for (var i = 0; i < lado; i++) {
        inicio += "*";
        console.log("*");
        fim += "*";
    }
    console.log(inicio);
}

caixa(10);
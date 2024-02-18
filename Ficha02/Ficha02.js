function imc(peso, altura) {
    var imc = peso/(altura) ** 2;
    console.log("O seu Indice de Massa Corporal é: "+imc);
}

//imc(60, 1.60)

function frase_inversa(frase) {
    var frase_invertida = "";   
    for (var i = frase.length - 1; i >= 0; i--) {
        frase_invertida += frase[i];
    }
    console.log(frase_invertida);

}

//frase_inversa("Hoje e Domingo");

function vogais(frase) {
    var contador = 0;
    for (var i = 0; i < frase.length; i++) {
        if (frase[i] == "a" || frase[i] == "e" || frase[i] == "i" || frase[i] == "o" || frase[i] == "u" || frase[i] == "A" || frase[i] == "E" || frase[i] == "I" || frase[i] == "O" || frase[i] == "U"){
            contador++;
        }
    }
    console.log(contador);
}

//vogais("America e irao");

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
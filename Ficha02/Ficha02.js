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

vogais("America e irao");
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

/**
function frase_inversa(frase) {
    var palavras = frase.split(" ");
    var frase_inversa = "";
    for(i = 0; i < palavras.length; i++){
        var palavra = palavras[i];
        for(j = palavra.length -1; j >= 0; j--){
            frase_inversa += palavra[j];
        }
        frase_inversa += " ";
    }
    return frase_inversa;
}
**/

console.log(frase_inversa("Hoje é Domingo"));

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

function caixa(altura, largura) {
    for (var i = 0; i < altura; i++) {
        var linha = "";
        for (var j = 0; j < largura; j++) {
            if (i==0 || i == altura - 1 || j == 0 || j== largura - 1){
                linha += "*";
            }else {
                linha += " ";
            }  
        }
        console.log(linha);
    }
}

//caixa(10,10);

    var students = [];
    var estudante1 = {nome: "Juan Pablo", numero: 20070, media: 17};
    var estudante2 = {nome: "Mateus Fernandes", numero: 12350, media: 9};
    var estudante3 = {nome: "Rodrigo Ribeiro", numero: 80970, media: 12};
    var estudante4 = {nome: "Pedro Matias", numero: 22230, media: 18};
    var estudante5 = {nome: "Gonçalo Freitas", numero: 21270, media: 15};
    students.push(estudante1);
    students.push(estudante2);
    students.push(estudante3);
    students.push(estudante4);
    students.push(estudante5);


function listaEstudantes(students){
    for (var i = 0; i < students.length; i++) {
      const s = students[i];
      console.log("O aluno "+ s.nome + ", número " + s.numero + " tem a média de " + s.media + " valores");
    }

   
    var melhorNota = students[0];
    for (var j = 1; j < students.length; j++) {
        const nota = students[j];
        if (nota.media > melhorNota.media) {
            melhorNota = students[j];
        }   
    }
    console.log("O melhor aluno tem o número "+melhorNota.numero+ " e média " + melhorNota.media);
    

    var piorNota = students[0];
    for (var u = 1; u < students.length; u++) {
        const aluno = students[u];
        if (aluno.media < piorNota.media) {
            piorNota = students[u];
        }   
    }
    console.log("O pior aluno tem o número "+piorNota.numero+ " e média " + piorNota.media);


    var countPositivas = 0;
    for (var k = 0; k < students.length; k++) {
        if (students[k].media >= 9.5) {
            countPositivas++;
        }
    
    }
    console.log("A turma tem "+ countPositivas + " positivas");


    var countNegativas = 0;
    for (var l = 0; l < students.length; l++) {
        if (students[l].media < 9.5) {
            countNegativas++;
        }
    
    }
    console.log("A turma tem "+ countNegativas + " negativas");



}

listaEstudantes(students);
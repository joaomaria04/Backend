function notas() {
    nota_teorica = 9.4;
    nota_pratica = 9.5
    media_notas = nota_teorica + nota_pratica / 2;
    if (media_notas >= 9.5) {
        console.log("O aluno está Aprovado.");
    }else {
        console.log("O aluno está Reprovado");
    }
}
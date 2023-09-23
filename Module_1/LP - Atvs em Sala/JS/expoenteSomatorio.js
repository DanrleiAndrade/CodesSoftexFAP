var numero;
var resultado = 0;
var pessoa = prompt("Informe seu nome: ");

ola(pessoa);

numero = parseInt(prompt("Digite um número inteiro positivo: "));

if (numero > 0) {
    expSomatorio(numero);
    console.log(`${numero}² = ${r}`);
} else {
    console.log("Número inválido!");
}

//==========funções========================

function ola(nome) {
    window.alert("Olá, " + nome + "!");
}

function expSomatorio(n) {
    let r = 0
    for (i = 0; i < numero; i++) {
        r += 2 * i + 1;
    }
    return r;
}
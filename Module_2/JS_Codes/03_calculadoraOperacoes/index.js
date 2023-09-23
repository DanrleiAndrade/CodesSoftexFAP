const prompt = require('prompt-sync')();

let valor1, valor2, operacao, resultado, resto;

entradaDados();

switch (operacao) {
    case "+":
        resultado = valor1 + valor2;
        break;
    case "-":
        resultado = valor1 - valor2;
        break;
    case "*":
        resultado = valor1 * valor2;
        break;
    case "/":
        resultado = valor1 / valor2;
        resto = valor1 % valor2;
        break;
    default:
        break;
}

print();

function entradaDados() {
    valor1 = parseFloat(prompt("Digite o primeiro valor: "));
    operacao = prompt("Digite o símbolo da operação desejada: ( + , - , * , / )");
    valor2 = parseFloat(prompt("Digite o segundo valor: "));
}

function print() {
    if(operacao == "/"){
        console.log(`O resultado da operação (${operacao}), é ${resultado.toFixed(2)} e o resto da divisão é ${resto}`);
    }else{
        console.log(`O resultado da operação (${operacao}), é ${resultado}`);
    }
}
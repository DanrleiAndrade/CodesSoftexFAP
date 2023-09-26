const prompt = require('prompt-sync')();

let a, b, resultado, operacao, repetir;

function adicao(a, b) {
    resultado = a + b;
    return resultado;
}

function subtracao(a, b) {
    resultado = a - b;
    return resultado;
}

function multiplicacao(a, b) {
    resultado = a * b;
    return resultado;
}

function divisao(a, b) {
    resultado = a / b;
    return resultado;
}

function inserirDados() {
    operacao = prompt("Digite o símbolo da operação desejada: ( + , - , * , / )");
    a = parseFloat(prompt("Digite o primeiro valor: "));
    b = parseFloat(prompt("Digite o segundo valor: "));
}

continuarOperacoes = () => {
    repetir = prompt("Deseja continuar a operação? ( SIM / NÃO )").toUpperCase();
    return repetir;
}

apresentarResultado = (operacao, resultado) => {console.log(`O resultado da operação de ${operacao}, é ${resultado.toFixed(2)}`)};

do {
    inserirDados();
    try {
        if (isNaN(a) || isNaN(b)) {
            throw new Error('Valor inválido');
        } else if (operacao !== "+" && operacao !== "-" && operacao !== "*" && operacao !== "/") {
            throw new Error('Operação inválida');
        }
        switch (operacao) {
            case "+":
                adicao(a, b);
                break;
            case "-":
                subtracao(a, b);
                break;
            case "*":
                multiplicacao(a, b);
                break;
            case "/":
                divisao(a, b);
                break;
            default:
                break;
        }
        apresentarResultado(operacao, resultado);
    } catch (error) {
        console.error(error.message);
    }

    
    continuarOperacoes();

} while (repetir == "SIM");
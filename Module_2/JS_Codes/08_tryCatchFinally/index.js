const prompt = require('prompt-sync')();

let dividendo, divisor, resultado, repetir;

function divisao(dividendo, divisor) {
    resultado = dividendo / divisor;
    return resultado;
}

function inserirDados() {
    console.log("Bem-vindo à calculadora de divisão!");
    dividendo = parseFloat(prompt("Digite o dividendo: "));
    divisor = parseFloat(prompt("Digite o divisor: "));
}

continuarNovaDivisao = () => {
    repetir = prompt("Deseja fazer uma nova divisão? ( SIM / NÃO )").toUpperCase();
    return repetir;
}

apresentarResultado = (resultado) => { console.log(`O resultado da divisão é: ${resultado.toFixed(2)}`) };

do {
    inserirDados();
    try {
        if (isNaN(dividendo) || isNaN(divisor)) {
            throw new Error('Divisão inválida');
        }else if (divisor == 0){
            throw new Error('Não é possível fazer divisão por zero');
        }else{
            divisao(dividendo, divisor);
            apresentarResultado(resultado);
        }
    } catch (error) {
        console.error("Erro na operação: --> " + error.message);
    } finally {
        continuarNovaDivisao();
    }

} while (repetir == "SIM");
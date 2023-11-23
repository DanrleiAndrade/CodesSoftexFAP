import readline from 'readline';
import { Calculator } from './calculator';
import { Strategy } from './strategy';
import { Addition, Subtraction, Multiplication } from './strategy';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o primeiro número: ', (firstNumber) => {
    rl.question('Digite o segundo número: ', (secondNumber) => {
        rl.question('Digite a operação (soma, subtracao, multiplicacao): ', (operation: string) => {
            let strategy: Strategy;
            switch (operation) {
                case 'soma':
                    strategy = new Addition();
                    break;
                case 'subtracao':
                    strategy = new Subtraction();
                    break;
                case 'multiplicacao':
                    strategy = new Multiplication();
                    break;
                default:
                    console.log('Operação inválida.');
                    rl.close();
                    return;
            }

            const calculator = new Calculator(strategy);
            const result = calculator.executeStrategy(parseInt(firstNumber), parseInt(secondNumber));
            console.log(`O resultado é: ${result}`);
            rl.close();
        });
    });
});
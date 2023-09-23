const prompt = require('prompt-sync')();

let nome, salario, idade, diploma, portadorDiploma;

nome = prompt("Informe seu nome: ");
salario = parseFloat(prompt("Informe seu salário: "));
idade = parseInt(prompt("Informe sua idade: "));
diploma = prompt("Você possui diploma? (S | N) ").toUpperCase();

switch (diploma) {
    case "S":
        portadorDiploma = true;
        break;
    case "N":
        portadorDiploma = false;
        break;
    default:
        break;
}

if(portadorDiploma == true){
    console.log(`Olá ${nome}. Você tem ${idade} anos, tem salário regitrado de R$ ${salario} e é portador(a) de diploma.`);
}else{
    console.log(`Olá ${nome}. Você tem ${idade} anos, tem salário regitrado de R$ ${salario} e não é portador(a) de diploma.`);
}

//const prompt = require('prompt-sync')();

import { Banco } from "./model/banco.js";

let contaMaximvs = new Banco(158900011, "Conta de Investimento", 50000, 5687);

console.log(contaMaximvs.saldo());
console.log(contaMaximvs.numeroConta());
contaMaximvs.depositar(1500);
console.log(contaMaximvs.saldo());
contaMaximvs.sacar(500);
console.log(contaMaximvs.saldo());
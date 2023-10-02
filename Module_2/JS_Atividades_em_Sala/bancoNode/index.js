/*NO TERMINAL - PARA O NODE
npm init - para iniciar o node
npm install prompt - para instalar o prompt
criar .gitignore com "gitignore para node"
node .\index.js - para rodar o código
Colocar "type": "module", antes de "dependencies", no package.json
baixar extensão Tabnine*/

import { Agencia } from './model/agencia.js';
import { Cliente } from './model/cliente.js';
import { Conta } from './model/conta.js';
import { Endereco } from './model/endereco.js';
import { Poupanca } from './model/poupanca.js';
import { ContaCorrente } from './model/contaCorrente.js';

let endAg = new Endereco("PE", "Recife", "Recife", "Rua da Guia", 1000, 305, "40545-010");
let agencia = new Agencia("Softex", 1234, "81900001111", "agsoftex@gmail.com", endAg);
let endCli = new Endereco("PE", "Recife", "Cordeiro", "Rua Rio Jiquiá", 347, "Quadra 2D", "09045-033");
let cliEgito = new Cliente("José Egito", "111.222.333-44", new Date("2014-10-10").toLocaleDateString(), "4455667", "egito@outlook.com", 81888996655, endCli);
let contaEgito = new Conta(cliEgito, 765432, agencia, 10358.70);

let endAlfred = new Endereco("PE", "Olinda", "Bairro Novo", "Rua Dois", 1212, "Esquina", "00095-033");
let cliAlfred = new Cliente("Alfred Cosmos", "382.988.113-44", new Date("1990-10-15").toLocaleDateString(), "123456", "alf@outlook.com", 71987765445, endCli);
let contaAlfred = new Conta(cliAlfred, 123456, agencia, 15358.70);

contaEgito.depositar(300.00);
contaEgito.sacar(500.00);
contaEgito.pagar(100.00);
contaEgito.transferir(600.00, contaAlfred);
contaEgito.depositar(1000.00);
contaEgito.pagar(50.00);

contaAlfred.depositar(5000.00);
contaAlfred.pagar(300.00);
contaAlfred.pagar(150.00);
contaAlfred.sacar(500.00);
//console.log(contaEgito);

console.log(contaEgito.mostrarExtrato());
console.log("\n");
console.log(contaAlfred.mostrarExtrato());


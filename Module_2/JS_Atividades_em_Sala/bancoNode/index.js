/*NO TERMINAL - PARA O NODE
npm init - para iniciar o node
npm install prompt - para instalar o prompt
node .\index.js - para rodar o código
Colocar "type": "module", antes de "dependencies", no package.json
baixar extensão Tabnine*/

import { Agencia } from './model/agencia.js';
import { Cliente } from './model/cliente.js';
import { Conta } from './model/conta.js';
import { Endereco } from './model/endereco.js';

let endAg = new Endereco("PE", "Recife", "Recife", "Rua da Guia", 1000, 305, "40545-010");
let agencia = new Agencia("Softex", 1234, "81900001111", "agsoftex@gmail.com", endAg);
let endCli = new Endereco("PE", "Recife", "Cordeiro", "Rua Rio Jiquiá", 347, "Quadra 2D", "09045-033");
let cliEgito = new Cliente("José Egito", "111.222.333-44", new Date("2014-10-10").toLocaleDateString(), "4455667", "egito@outlook.com", 81888996655, endCli);
let contaEgito = new Conta(cliEgito, 765432, agencia, 1358.70);

contaEgito.depositar(300);
contaEgito.sacar(500);
console.log(contaEgito);
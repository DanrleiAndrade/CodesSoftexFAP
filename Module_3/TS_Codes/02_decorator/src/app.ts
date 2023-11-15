//import { Sanduba } from "./sanduba";
//import { IngredienteDecorator } from "./ingredienteDecorator";
import { FrangoAssado } from "./frangoAssado";
import { Pepperoni } from "./pepperoni";
import { QueijoMussarelaRalado } from "./queijoMussarelaRalado";

let sanduicheFrango = new FrangoAssado();
let sanduicheFrangoPepperoni = new Pepperoni(sanduicheFrango);
let sanduicheFrangoPepperoniQueijo = new QueijoMussarelaRalado(sanduicheFrangoPepperoni);

console.log(`\n--------------------------------- SUBWAY SANDUÍCHES S.A. ---------------------------------\n`);
console.log(`${sanduicheFrangoPepperoniQueijo.getDescricao()} custa $${sanduicheFrangoPepperoniQueijo.custo().toFixed(2)} \n`);
console.log(`--------------------------------- xxxxxxxxxxxxxxxxxxxxxx ---------------------------------\n`);
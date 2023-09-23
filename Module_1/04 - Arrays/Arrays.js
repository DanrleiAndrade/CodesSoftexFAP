// Código escrito no programiz
// Se quiser testar, pode copiar e colar lá.

console.log("------------------- ARRAYS -----------------------");

let nomes = ["Alba", "Bianca", "Carmila", "Daiana", "Ellen", "Francesca", 
"Gemma", "Helena", "Ildegarda", "Jolene"];

let idades = [16, 15, 20, 35, 2, 28, 21, 12, 8, 10];

let coresFavoritas = ["azul", "branco", "preto", "fúscia", "amarelo", 
"azul celeste", "cinza", "dourado", "rosa", "verde"];

console.log(nomes);
console.log(idades);
console.log(coresFavoritas);

console.log("------------ ARRAYS PÓS-ALTERAÇÕES ---------------");

coresFavoritas.splice(1,1,"verde água");
idades.splice(0,1,17);

console.log(nomes);
console.log(idades);
console.log(coresFavoritas);

/*Poderia ter utilizado também o "for", para imprimir os valores. 
Mas achei que assim ficaria mais claro, no contexto desse exercício.*/
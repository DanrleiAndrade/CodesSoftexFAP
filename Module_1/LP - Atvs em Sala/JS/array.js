var num = [];
var numQuadrado = [];

for (let index = 0; index < 5; index++){
    num.push(Number(prompt(`Infome o ${index + 1}º número: `)));
}

console.log(num);

//for (let index = 0; index < num.length; index++){
//    numQuadrado.push(num[index]**2);
//}
//console.log(numQuadrado);

//Mesma coisa do acima, só que com "forEach". Opção mais profissional.
numQuadrado.forEach((elemento) => {
    console.log(elemento);;
});
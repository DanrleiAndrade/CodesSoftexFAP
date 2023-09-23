var valorUm, valorDois, operacao; 

console.log("Calculadora Mágica"); 

menu(); 

while (operacao != 0){ 
   if(operacao>=1 && operacao<=4){ 
      valorUm = parseInt(prompt("Digite o primeiro valor:   ")); 
      valorDois = parseInt(prompt("Digite o segundo valor:  ")); 
      calcular(valorUm,valorDois); 
   }else if(operacao<0 || operacao>5){ 
       console.log("Escolha uma opção válida!\n"); 
   } 
   menu();
}   

function menu(){ 
    operacao = parseInt(prompt("Digite o número da opção desejada:: \n 1. Soma | 2. Subtração | 3. Multiplicação | 4. Divisão | 0. Sair")); 
} 

function calcular(valorUm, valorDois){
    switch (operacao){ 
        case (1): 
            resultado = valorUm + valorDois;
            console.log("O resultado da soma é:" + resultado + "\n");
            break; 
        case 2: 
            resultado = valorUm - valorDois; 
            console.log("O resultado da subtração é:" + resultado + "\n"); 
            break; 
        case 3: 
            resultado = valorUm * valorDois; 
            console.log("O resultado da multiplicação é:" + resultado + "\n"); 
            break; 
        case 4: 
            resultado = valorUm / valorDois;
            console.log("O resultado da divisão é:" + resultado + "\n");
            break; 
        default: 
            console.log("Ops, tivemos algum problema!\n"); 
    } 
}
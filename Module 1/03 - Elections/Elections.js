// Código feito no Programiz
// Caso queira testar, favor, copiar e colar lá.

let candidatoX = 0;
let candidatoY = 0;
let candidatoZ = 0;
let branco = 0;
let nulo = 0;
let votar = true

while(votar == true){
    const voto = parseInt(prompt("Digite o número do candidato (889 para X | 847 para Y | 515 para Z | 0 para Branco)"));
    
    if(isNaN(voto)){
        console.log("Voto inválido. Digite apenas números.");
        continue;
    }
    
    switch(voto){
        case 889:
            candidatoX++;
            break;
        case 847:
            candidatoY++;
            break;
        case 515:
            candidatoZ++;
            break;
        case 0:
            branco++;
            break;
        default:
            nulo++;
            break;
    }
    while(true){
        let controleVotacao = prompt("Deseja encerrar a votação (Sim ou Não)?");
        if(controleVotacao === "Sim"){
            votar = false;
            break;
        }else if(controleVotacao === "Não"){
            votar = true;
            break;
        }else{
            console.log("Favor, digitar Sim ou Não.");
        }
    }
}

var totalVotos = candidatoX + candidatoY + candidatoZ + branco + nulo;
nulo = nulo + branco;

console.log("Total de Votos " + totalVotos);
console.log("Resultado da eleição: " +
"\nCandidato X: " + candidatoX +
"\nCandidato Y: " + candidatoY +
"\nCandidato Z: " + candidatoZ +
"\nVotos Nulos: " + nulo);

if(candidatoX > candidatoY && candidatoX > candidatoZ){
    console.log("Candidato X venceu a eleição.");
}else if(candidatoY > candidatoX && candidatoY > candidatoZ){
    console.log("Candidato Y venceu a eleição.");
}else if(candidatoZ > candidatoX && candidatoZ > candidatoY){
    console.log("Candidato Z venceu a eleição.");
}else {
    console.log("A eleição terminou em empate ou sem vencedor");
}
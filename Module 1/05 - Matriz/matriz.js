//Código feito no Programiz

var animais = [];

// Função para mostrar informações de um animal específico
function mostrarInformacoesAnimal(indice) {
    if (indice >= 0 && indice < animais.length) {
        var animal = animais[indice];
        console.log("Nome: " + animal[0] + ", Espécie: " + animal[1] + ", Idade: " + animal[2]);
    } else {
        console.log("Índice inválido. Escolha um número entre 0 e " + (animais.length - 1));
    }
}

// Função para adicionar um novo animal à matriz
function adicionarAnimal(nome, especie, idade) {
    var novoAnimal = [nome, especie, idade];
    animais.push(novoAnimal);
}

do {
    // Solicitar ao usuário o índice do animal que deseja ver ou adicionar
    var operacao = prompt("Escolha uma operação:\n 1 - Ver informações de um animal\n 2 - Adicionar um novo animal");

    if (operacao === "1") {
        var indiceEscolhido = prompt("Digite o número do animal que você deseja ver (0 para Cachorro, 1 para Cavalo, 2 para Tubarão-martelo):");
        indiceEscolhido = parseInt(indiceEscolhido);
        mostrarInformacoesAnimal(indiceEscolhido);
    } else if (operacao === "2") {
        var nomeNovoAnimal = prompt("Digite o nome do novo animal:");
        var especieNovoAnimal = prompt("Digite a espécie do novo animal:");
        var idadeNovoAnimal = prompt("Digite a idade do novo animal:");
        idadeNovoAnimal = parseInt(idadeNovoAnimal);

        adicionarAnimal(nomeNovoAnimal, especieNovoAnimal, idadeNovoAnimal);

        console.log("Novo animal adicionado com sucesso!");
    } else {
        console.log("Operação inválida. Escolha 1 para ver informações ou 2 para adicionar um novo animal.");
    }

    var opcaoEscolhida = prompt("Deseja ver dados sobre um animal ou inserir um novo? (Sim | Não)").toUpperCase;

} while (opcaoEscolhida == "SIM" || "NÃO");
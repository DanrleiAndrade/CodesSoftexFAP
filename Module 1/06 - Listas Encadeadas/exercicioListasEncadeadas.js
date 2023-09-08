class Pessoa {
    constructor(nome, idade, filho) {
        this.nome = nome;
        this.idade = idade;
        this.filho = filho;
        this.proximo = null;
    }

    // Método para definir o próximo elemento na lista
    definirProximo(proximo) {
        this.proximo = proximo;
    }
}

// Função para criar uma nova pessoa e adicioná-la à lista encadeada
function adicionarPessoa(lista, nome, idade, filho) {
    const novaPessoa = new Pessoa(nome, idade, filho);

    // Se a lista estiver vazia, a nova pessoa se torna o primeiro elemento
    if (!lista) {
        return novaPessoa;
    }
    // Caso contrário, percorremos a lista até encontrar o último elemento
    let atual = lista;
    while (atual.proximo) {
        atual = atual.proximo;
    }
    // Definimos o próximo elemento como a nova pessoa
    atual.definirProximo(novaPessoa);
    return lista;
}

// Aplicação prática::

let listaDePessoas = null;

listaDePessoas = adicionarPessoa(listaDePessoas, "Ana", 50, null);
listaDePessoas = adicionarPessoa(listaDePessoas, "Maria", 25, "Ana");
listaDePessoas = adicionarPessoa(listaDePessoas, "Jesus", 7, "Maria");

let atual = listaDePessoas;
while (atual) {
    console.log("Nome: " + atual.nome + ", Idade: " + atual.idade + " anos, Filho(a) de: " + atual.filho);
    atual = atual.proximo;
}
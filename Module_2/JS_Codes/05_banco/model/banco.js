export class Banco{
    #conta;
    #tipoConta;
    #saldo;
    #agencia;

    constructor(conta, tipoConta, saldo, agencia){
        this.#conta = conta;
        this.#tipoConta = tipoConta;
        this.#saldo = saldo;
        this.#agencia = agencia;
    }

    saldo() {
        return this.#saldo;
    }

    depositar(valor) {
        this.#saldo += valor;
    }

    sacar(valor) {
        if (this.#saldo >= valor) {
            this.#saldo -= valor;
        } else {
            console.error('Erro: Saldo insuficiente ' + valor + ' é maior do que o saldo ' + this.#saldo + '.');
        }
    }

    numeroConta() {
        return `Número da conta: ${this.#conta} | Tipo: ${this.#tipoConta} | Agência: ${this.#agencia}`;
    }
}
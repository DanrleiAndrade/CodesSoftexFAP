import { Transacao } from "./transacao.js";
import { TIPOTRANS } from "./EtipoTransacao.js";

export class Conta{
    constructor(cliente, numero, agencia, saldo){
        this.cliente = cliente;
        this.numero = numero;
        this.agencia = agencia;
        this.dataCriacao = Date.now();
        this.saldo = saldo;
        this.status = true;
        this.transacoes = [];
    }

    depositar(valor){
        this.saldo += valor;
        let trans = new Transacao(TIPOTRANS.deposito, new Date().toLocaleDateString(), valor, null, '+');
        this.transacoes.push(trans);
    }

    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
            let trans = new Transacao(TIPOTRANS.debito, new Date().toLocaleDateString(), valor, null, '-');
            this.transacoes.push(trans);
        }else{
            console.log("Erro: Saldo insuficiente!" + valor + "maior que o do saldo" + this.saldo + ".");
        }
    }

    transferir(valor, contaDestino){
        this.saldo -= valor;
        contaDestino.depositar(valor);
    }

    
}
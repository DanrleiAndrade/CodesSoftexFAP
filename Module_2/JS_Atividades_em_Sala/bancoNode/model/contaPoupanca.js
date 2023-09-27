import { Conta } from "./conta";

export class Poupanca extends Conta{
    #taxaRendimento;

    constructor(cliente, numero, agencia, saldo, taxaRendimento){
        super(cliente, numero, agencia, saldo);
        this.#taxaRendimento = taxaRendimento;
    }
    
    get taxaRendimento(){
        return this.#taxaRendimento;
    }

    set taxaRendimento(taxaRendimento){
        this.#taxaRendimento = taxaRendimento;
    }

    renderMes(qtdMeses){
        let saldoAtual = super.saldo;
        for(let i = 0; i < qtdMeses; i++){
            saldoAtual += saldoAtual * this.taxaRendimento;
        }
        let rendimento = saldoAtual - super.saldo;
        super.render(rendimento);
    }

    renderMes(){
        let saldoAtual = super.saldo;
        saldoAtual += saldoAtual * this.taxaRendimento;
        let rendimento = saldoAtual - super.saldo;
        super.render(rendimento);
    }
    
}
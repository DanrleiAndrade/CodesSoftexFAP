export class Atendimento{
    constructor(servico, valor, cliente, data){
        this.servico = servico;
        this.valor = valor;
        this.cliente = cliente;
        this.data = new Date().toLocaleDateString();
    }
}
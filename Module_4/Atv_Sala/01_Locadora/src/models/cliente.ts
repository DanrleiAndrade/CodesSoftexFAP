import { Endereco } from "./endereco";

export class Cliente{

    private cpf: number;
    private nome: string;
    private dataNasc: Date;
    private email: string;
    private telefone: Array<string>;
    private endereco: Endereco;
    
    constructor(cpf: number, nome: string, dataNasc: Date, email: string, telefone: Array<string>, endereco: Endereco){
        this.cpf = cpf;
        this.nome = nome;
        this.dataNasc = dataNasc;
        this.email = email;
        this.telefone = telefone;
        this.endereco = endereco;
    }

}
export class Endereco{

    private id: number;
    private UF: string;
    private cidade: string;
    private bairro: string;
    private rua: string;
    private numero: number;
    private comp: string;
    private cep: string;

    constructor(id: number, UF: string, cidade: string, bairro: string, rua: string, numero: number, comp: string, cep: string){
        this.id = id;
        this.UF = UF;
        this.cidade = cidade;
        this.bairro = bairro;
        this.rua = rua;
        this.numero = numero;
        this.comp = comp;
        this.cep = cep;
    }

}
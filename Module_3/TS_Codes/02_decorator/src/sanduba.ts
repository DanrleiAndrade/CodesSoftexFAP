export abstract class Sanduba {
    descricao = "Sanduíche desconhecido";
    getDescricao(): string {
        return this.descricao;
    }
    abstract custo(): number;
}
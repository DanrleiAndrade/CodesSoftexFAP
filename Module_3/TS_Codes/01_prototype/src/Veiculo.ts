export abstract class Veiculo {
    constructor(public modelo: string, public marca: string, public cor: string, public numeroRodas: number) {}

    abstract clone(): Veiculo;
    abstract represent(): string;
}
import { Veiculo } from "./Veiculo";

export class Onibus extends Veiculo {
    constructor(modelo: string, marca: string, cor: string, numeroRodas: number, public numeroPassageiros: number) {
        super(modelo, marca, cor, numeroRodas);
    }

    clone(): Veiculo {
        return new Onibus(this.modelo, this.marca, this.cor, this.numeroRodas, this.numeroPassageiros);
    }

    represent(): string {
        return `Carro: ${this.modelo} ${this.marca} ${this.cor} ${this.numeroRodas} rodas ${this.numeroPassageiros} portas`;
    }
}

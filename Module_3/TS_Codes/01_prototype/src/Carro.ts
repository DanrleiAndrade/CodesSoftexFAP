import { Veiculo } from "./Veiculo";

export class Carro extends Veiculo {
    constructor(modelo: string, marca: string, cor: string, numeroRodas: number, public numeroPortas: number) {
        super(modelo, marca, cor, numeroRodas);
    }

    clone(): Veiculo {
        return new Carro(this.modelo, this.marca, this.cor, this.numeroRodas, this.numeroPortas);
    }

    represent(): string {
        return `Carro: ${this.modelo} ${this.marca} ${this.cor} ${this.numeroRodas} rodas ${this.numeroPortas} portas`;
    }
}

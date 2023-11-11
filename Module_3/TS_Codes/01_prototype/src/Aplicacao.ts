import { Carro } from "./Carro";
import { Veiculo } from "./Veiculo";
import { Onibus } from "./Onibus";

class Aplicacao {
    veiculos: Veiculo[] = [];

    constructor() {
        let carro1 = new Carro('Corolla', 'Toyota', 'Preto', 4, 4);
        let onibus1 = new Onibus('Urbannus', 'Marcopolo', 'Branco', 4, 56);

        for (let i = 0; i < 3; i++) {
            this.veiculos.push(carro1.clone());
            this.veiculos.push(onibus1.clone());
        }
    }

    clonarVeiculos(): Veiculo[] {
        let clones: Veiculo[] = [];
        for (let veiculo of this.veiculos) {
            clones.push(veiculo.clone());
        }
        return clones;
    }

    imprimirClones() {
        let clones = this.clonarVeiculos();
        for (let clone of clones) {
            console.log(clone.represent());
        }
    }
}

let app = new Aplicacao();
app.imprimirClones();
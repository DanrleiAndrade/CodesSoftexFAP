import { Sanduba } from "./sanduba";
import { IngredienteDecorator } from "./ingredienteDecorator";

export class QueijoMussarelaRalado extends IngredienteDecorator {
    sanduiche: Sanduba;
    constructor(sanduiche: Sanduba) {
        super();
        this.sanduiche = sanduiche;
    }
    getDescricao(): string {
        return this.sanduiche.getDescricao() + ", Queijo Mussarela Ralado";
    }
    custo(): number {
        return this.sanduiche.custo() + 2.00;
    }
}
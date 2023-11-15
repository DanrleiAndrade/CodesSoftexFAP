import { Sanduba } from "./sanduba";
import { IngredienteDecorator } from "./ingredienteDecorator";

export class Pepperoni extends IngredienteDecorator {
    sanduiche: Sanduba;
    constructor(sanduiche: Sanduba) {
        super();
        this.sanduiche = sanduiche;
    }
    getDescricao(): string {
        return this.sanduiche.getDescricao() + ", Pepperoni";
    }
    custo(): number {
        return this.sanduiche.custo() + 0.99;
    }
}
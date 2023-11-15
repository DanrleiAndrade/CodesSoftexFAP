import { Sanduba } from "./sanduba";
import { IngredienteDecorator } from "./ingredienteDecorator";

export class FrangoAssado extends Sanduba {
    descricao = "Sanduíche de Frango Assado";
    custo(): number {
        return 4.50;
    }
}
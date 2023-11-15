import { Sanduba } from "./sanduba";

export abstract class IngredienteDecorator extends Sanduba {
    abstract getDescricao(): string;
}
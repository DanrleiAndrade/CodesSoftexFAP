import { Observador } from "./interface";

export class Pessoa implements Observador{
    private acordada: boolean = false;

    esta_acordada(): boolean{
        return this.acordada;
    }
    
    atualizar(): void {
        console.log("Acordei!");
        this.acordada = true;
    }
}
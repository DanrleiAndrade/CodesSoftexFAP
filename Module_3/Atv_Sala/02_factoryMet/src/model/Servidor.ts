import { Computador } from "./Computador";

export class Servidor extends Computador{

    private sistemaRaid: string;
    private so: string;

    constructor(ram: number, ssd: number, cpu: number, tipo: string, preco: number, sistemaRaid: string, so: string){
        super(ram, ssd, cpu, tipo, preco);
        this.sistemaRaid = sistemaRaid;
        this.so = so;
    }

    getSistemaRaid(): string{
        return this.sistemaRaid;
    }
    getSo(): string{
        return this.so;
    }

    toString(): string {
        return `Computador -- Tipo: ${super.getTipo()} | Mem. RAM: ${super.getRam()} | CPU: ${super.getCPU()} | SSD: ${super.getSSD()} | Preço: ${super.getPreco()} | OS: ${this.so} | Sistema Raid: ${this.sistemaRaid}`;
    }

}
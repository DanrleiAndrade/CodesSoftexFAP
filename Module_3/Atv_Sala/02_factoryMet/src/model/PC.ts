import { Computador } from "./Computador";

export class PC extends Computador{

    private monitor: string;

    constructor(ram: number, ssd: number, cpu: number, tipo: string, preco: number, monitor: string) {
        super(ram, ssd, cpu, tipo, preco);
        this.monitor = monitor;
    }

    getMonitor(): string{
        return this.monitor;
    }

    toString(): string {
        return `Computador -- Tipo: ${super.getTipo()} | Mem. RAM: ${super.getRam()} | CPU: ${super.getCPU()} | SSD: ${super.getSSD()} | Preço: ${super.getPreco()} | Monitor: ${this.monitor}`;
    }
}
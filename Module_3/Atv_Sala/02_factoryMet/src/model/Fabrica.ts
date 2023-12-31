import { Computador } from "./Computador";
import { PC } from "./PC";
import { Servidor } from "./Servidor";

export class Fabrica {

    static createComp(ram: number, ssd: number, cpu: number, tipo: string, preco: number) : Computador | null {
        if(tipo.toLowerCase()=="servidor"){
            return new Servidor(ram, ssd, cpu, tipo, preco, "RAID 0", "CentOS");
        }else if (tipo.toLowerCase()=="pc"){
            return new PC(ram, ssd, cpu, tipo, preco, "LG 25Pol UHD");
        }else{
            return null;
        }
    }


}
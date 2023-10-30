//import { Servidor } from "./model/Servidor";
//import { PC } from "./model/PC";

import { Computador } from "./model/Computador";
import { Fabrica } from "./model/Fabrica";

//let servidorSoftex = new Servidor(32, 1000, 4.8, "servidor", 15000, "RAID 0", "CentOS");

//let pcSoftex = new PC(16, 512, 3.2, "PC", 4000, "LG 25Pol UHD");

//console.log(servidorSoftex.toString());
//console.log(pcSoftex.toString());

let servidorSoftex2 = Fabrica.createComp(64, 2000, 5.0, "servidor", 20000);
//(servidorSoftex2 as Servidor).setSO("CentOS");
console.log(servidorSoftex2.toString());
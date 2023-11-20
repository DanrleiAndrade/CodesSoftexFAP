import { Pato } from "./pato";
import { AdaptadorPato } from "./adaptadorPato";
import { AdaptadorPatoDemo } from "./adpatadorPatoDemo";

const pato = new Pato();
const adaptador: AdaptadorPato = new AdaptadorPato(pato);
AdaptadorPatoDemo.demonstrar(adaptador);
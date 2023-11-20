import { AdaptadorPato } from "./adaptadorPato";

export class AdaptadorPatoDemo {
    static demonstrar(adaptador: AdaptadorPato) {
      console.log('Demonstração do adaptador:');
      adaptador.andar();
      adaptador.voar();
    }
}
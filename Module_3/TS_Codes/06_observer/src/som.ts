import { Observador } from "./interface";

export class Som{
    private barulho: boolean = false;
    private descansando: Observador[] = [];

    adicionarPessoa(pessoa: Observador): void {
        this.descansando.push(pessoa);
    }

    estado_som(): boolean{
        return this.barulho;
    }

    tocar(): void{
        this.barulho = true;
        for(const pessoa of this.descansando){
            pessoa.atualizar();
        }

        this.descansando = [];
        
    }
}
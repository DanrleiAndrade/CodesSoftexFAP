const prompt1 = require('prompt-sync')();

class SistemaSeguranca {
    private static instance: SistemaSeguranca;
    private senhaBaseSecreta: string;
   
    private constructor() {
       this.senhaBaseSecreta = "senha123";
    }
   
    public static getInstance(): SistemaSeguranca {
       if (!SistemaSeguranca.instance) {
         SistemaSeguranca.instance = new SistemaSeguranca();
       }
       return SistemaSeguranca.instance;
    }
   
    public acessarBaseSecreta(senha: string|null): boolean {
       if (senha === this.senhaBaseSecreta) {
         console.log("Acesso à Base Secreta concedido!");
         return true;
       } else {
         console.log("Acesso à Base Secreta negado!");
         return false;
       }
    }
   }
   
   // Programa principal
   const sistemaSeguranca = SistemaSeguranca.getInstance();
   const senhaDoAgente = prompt1("Digite a senha: ");
   
   sistemaSeguranca.acessarBaseSecreta(senhaDoAgente);
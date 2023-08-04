// Código feito no Programiz
// Caso queira testar, favor, copiar e colar lá.

var nome, anoNascimento, anoCorreto, idade;
anoCorreto = false;

while(anoCorreto == false){
    try{
        nome = prompt("Insira seu nome: ");
        anoNascimento = parseInt(prompt("Insira seu ano de nascimento(entre 1922 e 2021): "));
        if(isNaN(anoNascimento)==false){
            if(anoNascimento >= 1922 && anoNascimento <= 2021){
                anoCorreto = true;
                idade = 2022 - anoNascimento;
                console.log("Olá, " + nome + "! Em 2022, você fez " + idade + " anos!");
            }else{
                anoCorreto = false;
                console.log("Você digitou um ano inválido. Tente novamente.")
            }
        }else{
            throw new Error("O valor digitado não é válido.");
        }
    }catch(error){
        console.log(error);
        console.log("Valor inválido, tente mais uma vez.");
    }
}
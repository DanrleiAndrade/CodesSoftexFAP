//Enumerado dos candidatos
const CANDIDATOS = {
    daniloNome: "Danilo Faria",
    daniloNum: 889,
    egitoNome: "José Egito",
    egitoNum: 847,
    cleidianeNome: "Cleidiane Nunes",
    cleidianeNum: 515,
    brancoNome: "Branco",
    brancoNum: 0
}

do {
    //Zerando a votação
    let qtdVotosDanilo = 0;
    let qtdVotosEgito = 0;
    let qtdVotosCleidiane = 0;
    let qtdVotosBrancos = 0;
    let qtdVotosNulos = 0;
    let voto;
    let op;

    //zeresima(qtdVotosBrancos, qtdVotosNulos, qtdVotosDanilo, qtdVotosEgito, qtdVotosCleidiane);

    //Iniciando a votação
    do {
        let testeLetra = false;

        voto = prompt(`Bem-vindo ao Sistema de Votação.
                Candidatos: 
                    ${CANDIDATOS.daniloNome} => ${CANDIDATOS.daniloNum}
                    ${CANDIDATOS.egitoNome} => ${CANDIDATOS.egitoNum}
                    ${CANDIDATOS.cleidianeNome} => ${CANDIDATOS.cleidianeNum}
                    ${CANDIDATOS.brancoNome} => ${CANDIDATOS.brancoNum}
                Vote: `);

        //Testando se algum valor inserido era uma letra
        for (let i in voto) {
            if (isNaN(Number(voto[i]))){
                testeLetra = true;                
            }
        }
                
    } while (testeLetra); //"testeLetra" apenas, já que sendo "true", ele vai voltar ao "do".

    voto = Number(voto);

    if(voto === CANDIDATOS.daniloNum){
        qtdVotosDanilo++;
    }else if(voto === CANDIDATOS.egitoNum){
        qtdVotosEgito++;
    }else if(voto === CANDIDATOS.cleidianeNum){
        qtdVotosCleidiane++;
    }else if(voto === CANDIDATOS.brancoNum){
        qtdVotosBrancos++;
    }else{
        qtdVotosNulos++;
    }

    op = prompt("Deseja finalizar a votação? (SIM | NÃO)").toUpperCase;

} while (op === "NÃO");

alert(`Votos:
    ${CANDIDATOS.daniloNome} = ${qtdVotosDanilo}
    ${CANDIDATOS.egitoNome} = ${qtdVotosEgito}
    ${CANDIDATOS.cleidianeNome} = ${qtdVotosCleidiane}
    ${CANDIDATOS.brancoNome} = ${qtdVotosBrancos}
    Nulos = ${qtdVotosNulos}`);

if(qtdVotosDanilo > qtdVotosEgito && qtdVotosDanilo > qtdVotosCleidiane){
    alert(`${CANDIDATOS.daniloNome} eleito!`);
}else if(qtdVotosEgito > qtdVotosCleidiane && qtdVotosEgito > qtdVotosDanilo){
    alert(`${CANDIDATOS.egitoNome} eleito!`);
}else if(qtdVotosCleidiane > qtdVotosDanilo && qtdVotosCleidiane > qtdVotosEgito){
    alert(`${CANDIDATOS.cleidianeNome} eleita!`);
}else{
    alert("Eleição indefinida!")
}
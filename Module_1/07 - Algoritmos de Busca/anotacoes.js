//Busca linear

function buscalinear(array, elementoBuscado){
    for(let i=0; i<array.length; i++){
        if(array[i] === elementoBuscado){
            return i;
        }
    }
    return -1;
}

const listaNumeros = [10, 20, 30, 40, 50];
const elementoProcurado = 30;

const indiceEncontrado = buscalinear(listaNumeros, elementoProcurado);

if(indiceEncontrado !== -1){
    console.log(`O elemento ${elementoProcurado} foi encontrado no índice ${indiceEncontrado}.`);
}else{
    console.log(`O elemento ${elementoProcurado} não foi encontrado na lista.`);
}

//Busca binária

function buscaBinaria(array, elementoBuscado){
    let inicio = 0;
    let fim = array.length - 1;
    while(inicio <= fim){
        const meio = Math.floor((inicio+fim)/2);

        if(array[meio] === elementoBuscado){
            return meio;
        }

        if(array[meio]>elementoBuscado){
            fim = meio - 1;
        }else{
            inicio = meio + 1;
        }
    }
    return -1;
}

const listaNumerosOrdenada = [10, 20, 30, 40, 50];
const elementoProcurado2 = 30;
const indiceEncontrado2 = buscaBinaria(listaNumerosOrdenada, elementoProcurado2);
if(indiceEncontrado2 !== -1){
    console.log(`O elemento ${elementoProcurado2} foi encontrado no índice ${indiceEncontrado2}.`);
}else{
    console.log(`O elemento ${elementoProcurado2} não foi encontrado na lista.`);
}
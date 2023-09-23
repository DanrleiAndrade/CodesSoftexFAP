//Código feito para rodar no Programiz

const listaNum = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];
const elementoAProcurar = 20;

function buscarLinear(array, elementoABuscar){
    for(let i=0; i<array.length; i++){
        if(array[i] === elementoABuscar){
            return i;
        }
    }
}

const indiceLocalizado = buscarLinear(listaNum, elementoAProcurar);

if(indiceLocalizado !== -1){
    console.log(`O elemento ${elementoAProcurar} foi encontrado no índice ${indiceLocalizado}.`);
}else{
    console.log(`O elemento ${elementoAProcurar} não foi encontrado na lista.`);
}
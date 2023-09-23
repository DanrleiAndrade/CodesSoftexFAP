var raio, n;

//Para função com uma única expressão, o Arrow Function vale a pena
function ola1(){
    console.log("Hello");
}

let ola2 = () => console.log("Hello");

let areaEsfera = (raio) => (4 * Math.PI * raio * raio);


//Para função com múltiplas expressões, o Arrow Function não vale a pena
let expSomatorio = (n) => {
    let r = 0;
    //...
}
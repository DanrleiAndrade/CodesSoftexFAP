const prompt = require('prompt-sync')();

let nota;
let media = 0;

for (let i = 1; i < 4; i++) {
    nota = parseFloat(prompt(`Digite a ${i}ª nota: `));

    media += nota;
}

media = media / 3;
console.log(`Sua média é ${media.toFixed(2)}`);
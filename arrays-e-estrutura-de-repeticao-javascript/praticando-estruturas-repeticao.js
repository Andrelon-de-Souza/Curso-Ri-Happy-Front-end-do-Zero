// Exercício 1 - Tabuada
let tabuada = 8;

for(let i = 0; i <= 10; i++) {
    console.log(`${tabuada} * ${i} = ${tabuada * i}`);
}


// Exercício 2 - Apenas números pares
let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numerosPares = [];

for(let i = 0; i <= numeros.length; i++) {
    let numero = numeros[i];
    if(numero % 2 === 0) {
        numerosPares.push(numero);
    }
}

console.log(numerosPares);


// Outro jeito de fazer

for(let i = 0; i <= 20; i++){
    if(i % 2 === 0) {
        console.log(i);
    }
}
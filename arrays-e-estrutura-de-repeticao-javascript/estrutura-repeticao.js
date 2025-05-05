for(let i = 0; i < 10; i++) {
    console.log(i);
}



const nome = 'Andrelon de Souza Xavier';

for(let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}



let notas = [];

notas.push(9);
notas.push(10);
notas.push(5);
notas.push(10);
notas.push(3);
notas.push(8);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma += nota;
}

const media = soma / notas.length;
console.log(media);

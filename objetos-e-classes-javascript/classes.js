class Pessoa {
    nome;
    idade;
    anoDeNascimento;
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2025  - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const andrelon = new Pessoa('Andrelon S Xavier', 22);

const valeska = new Pessoa('Valeska S Melo', 25);

andrelon.descrever();
valeska.descrever();

console.log(andrelon);



function compararPessoas(p1, p2) {
    if(p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velha que ${p2.nome}!`);
    } else if(p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velha que ${p1.nome}!`);
    } else {
        console.log(`${p1.nome} e ${p3.nome} tem a mesma idade!`);
    }
}

const andre = new Pessoa('Andrelon', 22);
const leka = new Pessoa('Valeska', 25);

compararPessoas(andre, leka);
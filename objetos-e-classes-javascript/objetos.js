const pessoa = {
    nome: 'Andrelon S Xavier',
    idade: 22,
    descrever: function() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

pessoa.altura = 1.75;

delete pessoa.altura;

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.descrever());

pessoa.nome = "Valeska";
pessoa.idade = "25";
console.log(pessoa.descrever());



const atributo = "idade";
console.log(pessoa[atributo]);
console.log(pessoa['nome']);

pessoa['nome'] = 'Andrelon'; // Dinâmico
pessoa.nome = 'Andrelon'; // Acesso direto
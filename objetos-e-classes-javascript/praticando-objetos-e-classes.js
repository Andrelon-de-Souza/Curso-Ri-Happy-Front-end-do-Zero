// Exercício 1 - Criando a Classe Carro

class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoCombustivelPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoCombustivelPorKm;
    }

    calcularGastoDePercurso(distanciaEmKm, precoCombutivel) {
        return `Nesse percurso, você gastará R$${distanciaEmKm * this.gastoMedioPorKm * precoCombutivel} reais`;
    }
}

const gol = new Carro('Volkswagem', 'Prata', 1 / 9);
console.log(gol);
console.log(gol.calcularGastoDePercurso(120, 5, 69));

const celta = new Carro("Chevrolet", "Prata", 1 / 11);
console.log(celta);
console.log(celta.calcularGastoDePercurso(80, 5.99));


// Exercício 2 - Criando a Classe Pessoa
class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return this.peso / (this.altura * this.altura);
    }

    classificarImc() {
        let imc = this.calcularImc();

        if (imc < 18.5) {
            return `Seu IMC é ${imc.toFixed(2)}. Está abaixo do peso.`
        } else if (imc >= 18.5 && imc <= 25) {
            return `Seu IMC é ${imc.toFixed(2)}. Está com peso normal.`
        } else if (imc > 25 && imc <= 30) {
            return `Seu IMC é ${imc.toFixed(2)}. Está acima do peso.`
        } else if (imc > 30 && imc <= 40) {
            return `Seu IMC é ${imc.toFixed(2)}. Está Obeso.`
        } else {
            return `Seu IMC é ${imc.toFixed(2)}. Está com obesidade grave.`
        }
    }
}

const jose = new Pessoa("José", 70, 1.75);
console.log(jose);
console.log(jose.calcularImc());
console.log(jose.classificarImc());





const andrelon = new Pessoa('Andrelon', 87, 1.75);
console.log(andrelon);
console.log(andrelon.calcularImc());
console.log(andrelon.classificarImc());
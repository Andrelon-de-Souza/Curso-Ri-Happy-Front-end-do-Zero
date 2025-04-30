function teste() {
    console.log("Olá!");
}

function sayMyName (name) {
    console.log('Your name is: ' + name);
}

function quadrado(valor) {
    return valor  * valor;
}

function incrementarJuros(valor, percentualJuros) {
    const ValorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + ValorDeAcrescimo;
}

teste();
sayMyName('Andrelon');
const quadraoDeDez = quadrado(10);
console.log(quadraoDeDez);
console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 15));


function calcularJuros() {

}

function main() {
    console.log('Programa principal');
    calcularJuros();
}


// Exemplo prático
function calcularImc(peso, altura){
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return `Seu IMC é ${imc.toFixed(2)}. Está abaixo do peso.`;
    } else if (imc >= 18.5 && imc <= 25) {
        return `Seu IMC é ${imc.toFixed(2)}. Está com peso normal.`;
    } else if (imc > 25 && imc <= 30) {
        return `Seu IMC é ${imc.toFixed(2)}. Está acima peso.`;
    } else if (imc > 30 && imc <= 40) {
        return `Seu IMC é ${imc.toFixed(2)}. Está Obeso.`;
    } else {
        return `Seu IMC é ${imc.toFixed(2)}. Está com obesidade grave.`;
    }
}

// Main
(function () {
    let peso = 87;
    let altura = 1.75;
    let imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
})();


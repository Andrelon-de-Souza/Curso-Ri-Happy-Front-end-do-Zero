const numero = 15;
const numeroPar = numero % 2;
const numeroDivisivel = (numero % 5) === 0;

if(numeroPar === 0) {
    console.log("Par!");
} else {
    console.log("Ímpar");
}

if(numeroDivisivel == 0) {
    console.log("O número é inválido!");
} else if(numeroDivisivel) {
    console.log("Sim!");
} else {
    console.log("Não!");
}



// Exercício de Fixação
const precoEtanol = 2.89;
const precoGasolina = 5.79;
const tipoCombustívelNoCarro = 'Gasolina';
const gastoMedioPorKm = 8.50;
const DistanciaViagemEmKm = 150;

const distanciaPorLitro = DistanciaViagemEmKm / gastoMedioPorKm;

if(tipoCombustívelNoCarro === 'Etanol') {
    const gastoViagem = precoEtanol * distanciaPorLitro;
    console.log(`Será gasto R$${gastoViagem.toFixed(2)} reais para realizar a sua viagem!`);
} else if(tipoCombustívelNoCarro === "Gasolina") {
    const gastoViagem = precoGasolina * distanciaPorLitro;
    console.log(`Será gasto R$${gastoViagem.toFixed(2)} reais para realizar a sua viagem!`);
} else {
    console.log("Dados inseridos está incorreto!");
}
// Exercício 1 - Média de notas
let nota1 = 7;
let nota2 = 10;
let nota3 = 5;
let media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
    console.log(`Sua média é ${media.toFixed(1)}. Você foi reprovado! :(`);
} else if (media >= 5 && media <= 7) {
    console.log(`Sua média é ${media.toFixed(1)}. Você ficou em Recuperação! ;)`);
} else {
    console.log(`Sua média é ${media.toFixed(1)}. Você foi aprovado para o próximo semestre!!! :)`);
}

console.log(" ");


// Exercício 2 - Cálculo do IMC
let peso = 87;
let altura = 1.75;
let imc = peso / Math.pow(altura, 2);

if (imc < 18.5) {
    console.log(`Seu IMC é ${imc.toFixed(2)}. Está abaixo do peso.`);
} else if (imc >= 18.5 && imc <= 25) {
    console.log(`Seu IMC é ${imc.toFixed(2)}. Está com peso normal.`);
} else if (imc > 25 && imc <= 30) {
    console.log(`Seu IMC é ${imc.toFixed(2)}. Está acima peso.`);
} else if (imc > 30 && imc <= 40) {
    console.log(`Seu IMC é ${imc.toFixed(2)}. Está Obeso.`);
} else {
    console.log(`Seu IMC é ${imc.toFixed(2)}. Está com obesidade grave.`);
}

console.log(" ");


// Exercício 3 - Valor pago de um produto
let precoEtiqueta = 100;
let formaPagamento = 4;

if(formaPagamento === 1){
    console.log(`Você escolheu a opção à vista no débito, receberá 10% de desconto, de R$${precoEtiqueta},00 reais, ficará por apenas R$${precoEtiqueta - (precoEtiqueta * 0.1)},00 reais.`);
} else if(formaPagamento === 2) {
    console.log(`Você escolheu a opção à vista no dinheiro ou PIX, receberá 15% de desconto, de R$${precoEtiqueta},00 reais, ficará por apenas R$${precoEtiqueta - (precoEtiqueta * 0.15)},00 reais.`);
} else if(formaPagamento === 3) {
    console.log(`Você escolheu a opção de pagar em 2x, o valor será de R$${precoEtiqueta},00 reais sem juros.`);
} else if (formaPagamento === 4) {
    console.log(`Você escolheu a opção de pagar em mais de 2x, o valor será de R$${precoEtiqueta},00 reais com juros de 10%, ficando no valor de R$${precoEtiqueta + (precoEtiqueta * 0.1)},00.`);
} else {
    console.log('Opção inválida para a forma de pagamento!');
    
}
// Exercício 1 - Função que escreve meu nome
function escreveMeuNome(nome) {
    return 'Meu nome é ' + nome;
    
}

console.log(escreveMeuNome('Andrelon'));
console.log(escreveMeuNome('Valeska'));

console.log(' ');


// Exercício 2 - Função que verifica a idade
function verificarIdade(idade) {
    if(idade < 18) {
        console.log('Você é menor de idade!');
    } else {
        console.log('Você é maior de idade!');
    }
}

verificarIdade(21);

console.log(' ');


// Exercício 3 - Invocando função dentro de outra função
function invocandoFuncao(idade) {
    if(idade < 18) {
        console.log(escreveMeuNome('Andrelon') + ' e sou menor de idade!');
    } else {
        console.log(escreveMeuNome('Andrelon') + ' e sou maior de idade!');
    }
}

invocandoFuncao(21);

console.log(' ');


// Exercício 4 - Função para calcular preço
function calcularDesconto(valor, desconto) {
    return (valor - (valor * (desconto / 100)));
}

function calcularJuros(valor, juros) {
    return (valor + (valor * (juros / 100)));
}

(function () {
    let precoEtiqueta = 100;
    let formaPagamento = 4;
    
    if(formaPagamento === 1){
        console.log(`Você escolheu a opção à vista no débito, receberá 10% de desconto, de R$${precoEtiqueta},00 reais, ficará por apenas R$${calcularDesconto(precoEtiqueta, 10)},00 reais.`);
    } else if(formaPagamento === 2) {
        console.log(`Você escolheu a opção à vista no dinheiro ou PIX, receberá 15% de desconto, de R$${precoEtiqueta},00 reais, ficará por apenas R$${calcularDesconto(precoEtiqueta, 15)},00 reais.`);
    } else if(formaPagamento === 3) {
        console.log(`Você escolheu a opção de pagar em 2x, o valor será de R$${precoEtiqueta},00 reais sem juros.`);
    } else if (formaPagamento === 4) {
        console.log(`Você escolheu a opção de pagar em mais de 2x, o valor será de R$${precoEtiqueta},00 reais com juros de 10%, ficando no valor de R$${calcularJuros(precoEtiqueta, 10)},00.`);
    } else {
        console.log('Opção inválida para a forma de pagamento!');
        
    }
})();
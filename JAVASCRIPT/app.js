let nome  = 'João';
let valor;

/* Comentário */
console.log('Olá mundo');
console.log('Esse trecho será exibido no console do navegador do',nome);
console.log('Valor', valor);

// Variáveis e Constantes são usadas em camelCase
// Variáveis e Constantes são Case-sensitive

// Não podemos redeclarar variáveis com let
// NÃO UTILIZE VAR, UTILIZE CONST

let nomeCliente = 'Luiz';
let nomecliente = 'Otávio';

// Não podemos modificar o valor de uma constante
// NÃO UTILIZE VAR, UTILIZE LET

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 5;
resultadoTriplicado = resultadoTriplicado + 5;

console.log(primeiroNumero + segundoNumero);
console.log(typeof(primeiroNumero + segundoNumero));

/*
* Tipos primitivos de variáveis
* number = INT ou FLOAT
* string = texto
* boolean = true ou false
* undefined
* null
*/

// Criando um objeto
let pen = {
    itemName: 'Pen',
    itemPrice: 3,
    itemAvailable: true,
    itemColor: 'Red'
};
console.log(pen);

pen.itemColor = 'Blue'
console.log(pen);
console.log(pen.itemName);

let friends = ['Marcos', 'Ana'];
console.log(friends);

function saleStatus(status, total) {
    console.log('Transaction:', status, 'Total amount: $', total)
}

saleStatus('Approved', 30);

function percentage10(price) {
    newprice = price*0.9;
    return newprice
};

console.log(percentage10(20))

// Comparações estrita e flexivel
num1 = 1
num2 = '1'
console.log(num1 === num2) // Strict Equality
console.log(num1 == num2)  // Loose Equality

// Operador Ternário
let motorista = 100
let velocidade = motorista > 90 ? 'Acima' : 'Abaixo'
console.log(velocidade)

// Operadores Lógicos
let temIdadeMinima = true
let temTituloEleitor = true
let podeVotar = temIdadeMinima && temTituloEleitor
console.log(podeVotar)
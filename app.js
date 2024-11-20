let nome  = 'João';
let valor;

/* Comentário */
console.log('Olá lundo');
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
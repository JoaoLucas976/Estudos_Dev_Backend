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

// Objetos
let bookTitle = 'Atomic Habits';
let bookAuthor = 'James Clear';
let bookPages = 306;


// Factory
function createBook(title, author, pages){
    const book = {
        bookTitle: title,
        bookAuthor: author,
        bookPages: pages,
        printBook: function(){
            console.log('Printing...')
        }
    }
    return book
};

// Constructor
function CreateNewBook(title, author, pages){
    this.bookTitle = title;
    this.bookAuthor = author;
    this.bookPages = pages
}

const newBook1 = new CreateNewBook('It', 'Stephen', 1000);
console.log(newBook1);

/*
const book1 = createBook('Atomic Habits', 'James', 306)
const book2 = createBook('Think and Grow', 'Napoleon', 450)
book1.color = 'White Gold'
console.log(book1)
console.log(book2) */

firstName = 'João'

const email = 'Hi Joe, \nThe meeting is confirmed!\nAndre'
const email2 = `Hi ${firstName}, 
The meeting is confirmed! 
Andre`

console.log(email)
console.log(email2)
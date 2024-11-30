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

// firstName = 'João'

// const email = 'Hi Joe, \nThe meeting is confirmed!\nAndre'
// const email2 = `Hi ${firstName}, 
// The meeting is confirmed! 
// Andre`

// console.log(email)
// console.log(email2)

const movies = [
    {id: 1, movieName: 'Dejavu'},
    {id: 2, movieName: 'Back to the Future'},
    {id: 3, movieName: 'The Matrix'}
]

console.log(movies.find(function(movie) {
    return movie.movieName === 'The Matrix'
}))

console.log(movies.find(movie => movie.movieName === 'The Matrix'))

// ------------------------------------------------------------------

const num = [7, 8, 9]           // Array inicial
num.push(10, 11, 12)            // Insere numeros no final do array
num.unshift(1, 2, 3)            // Insere numeros no inicio do array
num.splice(3, 0, 4, 5, 6)       // Insere itens apartir do index 3, remove 0 itens, insere os numeros 4, 5, 6
num.shift()                     // Remove o primeiro elemento do array
num.pop()                       // Remove o último elemento do array
console.log(num.indexOf(8))     // Retorna o index do numero passado
console.log(num.includes(4))    // Retorna se um numero existe ou não em uma array

let numbers = [5, 6, 7, 8]
let letters = ['a', 'b', 'c']

all = numbers.concat(letters)
half = numbers.slice(3,4).concat(letters.slice(0,1))
console.log(all)
console.log(half)

// ------------------------------------------------------------------

let clients = ['Joao', 'Marcus', 'Filipe']
console.log(clients)
clients.sort()
console.log(clients)
clients.reverse()
console.log(clients)
let clientsJoin = clients.join(', ')
console.log(clientsJoin)

// ------------------------------------------------------------------

const tempLondon = [18, 13, 9, 2, -4]
const tempPositive = tempLondon.every(value => value >= 0)    // Verifica uma condição para todo o array retorna true ou false
const tempPositive2 = tempLondon.filter(value => value >= 0)  // Verifica uma condição para filtrar todo o array, retorna os valores do filtro
console.log(tempPositive)

// ------------------------------------------------------------------

// Hoisting
// Function Declaration (com hoisting)
movie()

function movie(){
    console.log('The Matrix')
}

// Function Expression (sem hoisting)
const car = function(){
    console.log('Tesla')
}

car()

const truck = car

truck()

// Arguments
function price(a = 0, b = 0){
    return a + b
}
console.log(price(10, 20))

function price2(){
    let total = 0
    for (let value of arguments)
        total += value
    return total
}
console.log(price2(10, 20, 30, 40, 50))

function carLoan(loan, rate = 2.9, years = 5){
    return (loan * rate/100 * years) + loan
}
console.log(carLoan(20000))

console.log('-----------------------------------------')

let varA = 'A';
let varB = 'B';
let varC = 'C';

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC)
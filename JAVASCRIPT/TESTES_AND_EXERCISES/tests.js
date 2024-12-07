/* 

Teste 1 (Objetos e Operadores Lógicos)
let eleitor = {
    'temIdadeMinima':true,
    'temTituloEleitor':true
};
eleitor1 = eleitor;
eleitor1.temIdadeMinima = false;
eleitor2 = eleitor;
eleitor2.temTituloEleitor = false;

let eleitores = [eleitor1, eleitor2];

if (eleitores[0].temIdadeMinima === true && eleitores[0].temTituloEleitor == true){
    console.log('Pode votar');
} else {
    console.log('Não pode votar')
} 

Exemplo Operadores Lógicos
let corCliente = 'White';
let corCliente = undefined
let corEstoque = 'Black';
let corVendida = corCliente || corEstoque \\ Se a corCliente for undefined, ele retorna a corEstoque
console.log(corVendida)

Exemplo de Switch Case
let airport = 'MCO'

switch(airport){
    case 'MCO':
        console.log('Orlando')
        break
    case 'JFK':
        console.log('John F. Kennedy')
        break
    case 'SEA':
        console.log('Seattle')
        break
    default:
        console.log('Unknown')
}

for (i = 1; i <= 10; i++){console.log('Numero', i);}

i = 10
while (i <= 20) {console.log('Numero', i); i++}

i = 1
do {
    console.log('Numero ', i); i++
} while (i <= 5)

let eleitor = {
    'temIdadeMinima':true,
    'temTituloEleitor':true
};

const eleitor3 = eleitor
for (let i in eleitor){
    console.log(i, eleitor3[i])
}

const friends = ['Marcus', 'Filipe', 'Romulo']
for (let i of friends){
    console.log(i)
} */

let mensagem = ''
for (let i = 0; i < 10; i++){
    mensagem = mensagem + String(i)
    console.log(mensagem)
}
let n = 10
n.toString()        // Converte o número para string
n = String('10')    // Converte o número para string

let inteiro = Number.parseInt('10')  // Converte o textp para inteiro
let real = Number.parseFloat('9.87') // Converte o texto para real (float)
let numero = Number('123.123')       // Converte o texto para número (decide se real ou inteiro)

// Método de conversão monetária
let dinheiro = 1416.5
console.log(dinheiro)
console.log(dinheiro.toFixed(2))     // Fixa o número de casas decimais depois do ponto 
console.log(dinheiro.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})) // Converte o valor para monetário em Real
console.log(dinheiro.toLocaleString('en-US', {style: 'currency', currency: 'USD'})) // Converte o valor para monetário em Dólar
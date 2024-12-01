// Template Strings
txt = 'Texto'
msg = `A variável é: ${txt}`
console.log(msg)

// Concetenação
msg2 = 'A variável é: ' + txt
console.log(msg2)

// Métodos
msg3 = 'Essa é uma String Com Caracteres Variados'
console.log(msg3)
console.log(msg3.toUpperCase())                           // O método toUpperCase() retorna a string toda em maiusculo
console.log(msg3.toLowerCase())                           // O método toLowerCase() retorna a string toda em minusculos
console.log(`A String possui ${msg3.length} caracteres`)  // O atributo length retorna o número de caracteres da string

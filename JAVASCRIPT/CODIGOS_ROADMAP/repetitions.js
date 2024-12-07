// While
let numFatias = 8
console.log('Trouxe uma pizza')
while (numFatias > 1){
    numFatias--
    console.log(`Comi uma fatia, faltam ${numFatias} fatias`)
} console.log('Comi uma fatia, acabou a pizza')


// Do-While
console.log('Trouxe mais uma pizza')
numFatias = 8
do {
    numFatias--
    console.log(`Comi uma fatia, faltam ${numFatias} fatias`)
} while (numFatias > 0)

// For Loop
for (let numFatias = 8; numFatias > 0; numFatias--){
    console.log(`Comi uma fatia, faltam ${numFatias} fatias`)
}
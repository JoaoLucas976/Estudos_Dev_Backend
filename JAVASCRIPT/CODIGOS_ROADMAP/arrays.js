let num = [4, 8, 5]
num[3] = 6
num.push(7)
num.sort()

console.log(`O vetor é: ${num}`)
/*for(i = 0; i < num.length; i++){
    console.log(`A posição ${i} possui o valor ${num[i]}`)
}*/

for(let pos in num){
    console.log(`A posição ${pos} possui o valor ${num[pos]}`)
}

let posicao = num.indexOf(4)
if (posicao == -1){
    console.log('Número não encontrado')
} else {
    console.log(`O numero está na posição ${posicao}`)
}
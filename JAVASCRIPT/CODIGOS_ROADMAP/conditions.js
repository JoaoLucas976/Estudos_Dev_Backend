// Condições com if/else/else if
let hoje = new Date()
let agora = [hoje.getHours(), hoje.getMinutes()]
if (agora[1] < 10){
    console.log(`Agora são ${agora[0]}:0${agora[1]}h`)
} else {
    console.log(`Agora são: ${agora[0]}:${agora[1]}h`)
}

// Condições com switch case
let diaSem = hoje.getDay()
switch(diaSem){
    case 0:
        console.log('Hoje é Domingo')
        break
    case 1:
        console.log('Hoje é Segunda')
        break
    case 2:
        console.log('Hoje é Terça')
        break
    case 3:
        console.log('Hoje é Quarta')
        break
    case 4:
        console.log('Hoje é Quinta')
        break
    case 5:
        console.log('Hoje é Sexta')
        break
    case 6:
        console.log('Hoje é Sábado')
        break
    default:
        console.log('[Erro]: Dia Inválido')
        break
}
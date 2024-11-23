let computerNumber;
let userNumbers = [];

function init(){
    computerNumber = Math.floor(Math.random() * 100 + 1)
    document.getElementById('textOutput').innerHTML = "Sua Tentativa:"
    document.getElementById('inputBox').value = ''
    document.getElementById('guesses').innerHTML = ""
    document.getElementById('attempts').innerHTML = 0
    //console.log(computerNumber)
}

function compareNumbers(){
    let userNumber = Number(document.getElementById('inputBox').value)
    
    userNumbers.push(" " + userNumber)
    document.getElementById('guesses').innerHTML = userNumbers
    document.getElementById('attempts').innerHTML = userNumbers.length

    if (userNumber == computerNumber){
        document.getElementById('textOutput').innerHTML = "Parabéns"
        document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
    } else if (userNumber > computerNumber){
        document.getElementById('textOutput').innerHTML = "Muito Alto"
        document.getElementById('inputBox').value = ''
    } else if (userNumber < computerNumber){
        document.getElementById('textOutput').innerHTML = "Muito Baixo"
        document.getElementById('inputBox').value = ''
    }

    if (userNumbers.length == 10){
        document.getElementById('textOutput').innerHTML = "Game Over. O número era " + computerNumber
        document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
    }
}
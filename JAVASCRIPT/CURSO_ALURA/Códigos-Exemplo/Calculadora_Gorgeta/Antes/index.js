let mode = 'light';

function darkMode(){
    let fundo = document.getElementsByTagName('main')[0]
    let titulo = document.querySelector('h1#titulo')
    let corpo = document.body
    if (mode == 'light'){
        console.log('Modo Escuro Ativado')
        corpo.style.background = '#898e8e'
        fundo.style.background = 'linear-gradient(30deg, #898e8e, #272929)';
        titulo.style.color = 'white';
        mode = 'dark'
    } else if (mode == 'dark') {
        console.log('Modo Claro Ativado')
        corpo.style.background = 'white'
        fundo.style.background = 'linear-gradient(30deg, #3dc0c0, #5bceae)'; 
        titulo.style.color = 'black';
        mode = 'light'
    }
}

function formatMoney(value){
    value = Math.ceil(value * 100)/100
    value = value.toFixed(2)
    return 'R$ ' + value
}

function formatDivisao(valor){
    if (valor > 1) return valor + ' Pessoas'
    return valor + ' Pessoa'
}

function update(){
    let bill = Number(document.getElementById('yourBill').value)
    let tipPercent = document.getElementById('tipInput').value
    let split = document.getElementById('splitInput').value
    let tipValue = bill*(tipPercent/100)
    let totalBill = bill + tipValue
    let billEach = totalBill / split
    console.log({bill, tipPercent, split})
    console.log({tipValue, totalBill, billEach})
    document.getElementById('tipPercent').innerHTML = `${tipPercent}%`
    document.getElementById('splitValue').innerHTML = formatDivisao(split)
    document.getElementById('tipValue').innerHTML = formatMoney(tipValue)
    document.getElementById('totalWithTip').innerHTML = formatMoney(totalBill)
    document.getElementById('billEach').innerHTML = formatMoney(billEach)
}
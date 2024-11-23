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
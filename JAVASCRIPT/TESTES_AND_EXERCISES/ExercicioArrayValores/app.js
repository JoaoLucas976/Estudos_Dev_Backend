let numeros = []
let res = document.querySelector('div#resultado')
function adicionar(){
    let num = Number(document.getElementById('numero').value)
    let seletor = document.getElementById('seltxt')
    if (num < 1 || num > 100){
        alert('Número Inválido')
    } else {
        if(numeros.indexOf(num) == -1){
            res.innerHTML = ''
            numeros.push(num)
            let item = document.createElement('option')
            item.text = `Valor ${num} adicionado`
            seletor.appendChild(item)
        } else {
            alert('Número Repetido')
        }
    }
}

function finalizar(){
    if (numeros.length > 0){
        let soma = 0
        let max = 1
        let min = 100
        let media = 0
        for (let i = 0; i < numeros.length; i++){
            if (numeros[i] > max){
                max = numeros[i]
            } 
            if (numeros[i] < min){
                min = numeros[i]
            }
            soma += numeros[i]
        }
        media = soma/numeros.length
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo temos ${numeros.length} números cadastrados </p>`
        res.innerHTML += `<p> O maior valor informado foi ${max} </p>`
        res.innerHTML += `<p> O menor valor informado foi ${min} </P>`
        res.innerHTML += `<p> A soma dos Números é: ${soma} </p>`
        res.innerHTML += `<p> A média dos Números é: ${media} </p>`
    } else {
        alert('Adicione números antes de finalizar')
    }
}
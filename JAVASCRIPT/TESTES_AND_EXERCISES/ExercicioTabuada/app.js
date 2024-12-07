function tabuada(){
    let numero = document.getElementById('numero').value
    let tab = document.getElementById('seltab')
    if (numero == ''){
        alert('Escolha um número válido')
    } else {
        tab.innerHTML = ''
        numero = Number(numero)
        for (let i = 1; i <= 10; i++){
            let item = document.createElement('option')
            item.text = `${i} X ${numero} = ${i * numero}`
            tab.appendChild(item)
        }
    }
}
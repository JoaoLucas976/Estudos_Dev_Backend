function mensagem(){
    let inicio = document.getElementById('inicio').value
    let final = document.getElementById('final').value
    let passo = document.getElementById('passo').value
    if (inicio != '' && final != '' && passo != ''){
        inicio = Number(inicio)
        final = Number(final)
        passo = Number(passo)
        if (final > inicio){
            if (passo > 0){
                let contagem = ''
                for (let i = inicio; i < final; i += passo){
                    if (i + passo >= final){
                        contagem = contagem + '🚩'
                    } else {
                        contagem = contagem + String(i) + '&#x1F449;'
                    }
                } document.getElementById('resultado').innerHTML = `<p> ${contagem} </p>`
            } else {
                alert('Passo inválido')
            }
        } else if (final < inicio) {
            if (passo < 0){
                let contagem = ''
                for (let i = inicio; i >= final; i += passo){
                    if (i + passo <= final){
                        contagem = contagem + '🚩'
                    } else {
                        contagem = contagem + String(i) + '&#x1F449;'
                    }
                } document.getElementById('resultado').innerHTML = `<p> ${contagem} </p>`
            } else {
                alert('Passo inválido')
            }
        }
    } else {
        alert('Confira os valores')
    }
}
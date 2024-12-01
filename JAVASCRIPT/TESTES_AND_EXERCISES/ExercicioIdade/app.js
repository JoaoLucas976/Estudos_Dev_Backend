function verificar(){
    let data = new Date()
    let anoAtual = data.getFullYear()
    let anoNascimento = document.querySelector('input#txtano').value
    if (anoNascimento == 0 || anoNascimento > anoAtual){
        alert('Verifique os dados e tente novament')
    } else {
        let idade = anoAtual - anoNascimento
        let sexCheck = document.getElementsByName('radsex')
        let sexo = ''
        let imagem = document.createElement('img')
        let res = document.querySelector('div#res')
        imagem.setAttribute('id', 'foto')
        if (sexCheck[0].checked){
            sexo = 'Homem'
            if (idade >= 0 && idade < 10){
                imagem.setAttribute('src', 'images/bebe-homem.png')
            } else if (idade >= 10 && idade < 21){
                imagem.setAttribute('src', 'images/jovem-homem.png')
            } else if (idade >= 21 && idade < 50){
                imagem.setAttribute('src', 'images/adulto-homem.png')
            } else if (idade >= 50 && idade < 120){
                imagem.setAttribute('src', 'images/idoso-homem.png')
            } else if (idade > 120){
                alert('Velho')
            } 
        } else if (sexCheck[1].checked){
            sexo = 'Mulher'
            if (idade >= 0 && idade < 10){
                imagem.setAttribute('src', 'images/bebe-mulher.png')
            } else if (idade >= 10 && idade < 21){
                imagem.setAttribute('src', 'images/jovem-mulher.png')
            } else if (idade >= 21 && idade < 50){
                imagem.setAttribute('src', 'images/adulta-mulher.png')
            } else if (idade >= 50 && idade < 120){
                imagem.setAttribute('src', 'images/idoso-mulher.png')
            } else if (idade > 120){
                alert('Velho')
            } 
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${sexo} com ${idade} anos`
        res.appendChild(imagem)
    }

}
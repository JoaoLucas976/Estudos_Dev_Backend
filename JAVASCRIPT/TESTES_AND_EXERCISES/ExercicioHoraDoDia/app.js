let hoje = new Date()
let horas = hoje.getHours()
let minutos = hoje.getMinutes()

function formatarHora(){
    if (minutos < 9){
        return `${horas}:0${minutos}`
    } else {
        return `${horas}:${minutos}`
    }
}

function carregar(){
    let texto = document.getElementById('texto')
    let imagem = document.querySelector('img#imagem')
    let saudacao = document.querySelector('div#saudacao')
    let corpo = document.body
    let secao = document.querySelector('section#secao')
    let horaAtual = formatarHora()
    texto.innerHTML = `<p>Agora são ${horaAtual}<p>`
    if (horas < 6){
        imagem.src = 'images/madrugada.png'
        saudacao.innerHTML = '<p>Boa Madrugada<p>'
        secao.style.background = '#b3602a'
        corpo.style.background = '#5a463d'
    } else if (horas >= 6 && horas < 12){
        imagem.src = 'images/dia.png'
        saudacao.innerHTML = '<p>Bom Dia<p>'
        secao.style.background = '#eeeff1'
        corpo.style.background = '#2d6fa1'
    } else if (horas >= 12 && horas < 18){
        imagem.src = 'images/tarde.png'
        saudacao.innerHTML = '<p>Boa Tarde<p>'
        secao.style.background = '#edac62'
        corpo.style.background = '#ff8204'
    } else {
        imagem.src = 'images/noite.png'
        saudacao.innerHTML = '<p>Boa Noite<p>'
        secao.style.background = '#7c8898'
        corpo.style.background = '#19212e'
    }

}
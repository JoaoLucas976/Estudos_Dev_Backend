/*
    Uma factory é uma função que retorna um objeto com características determinadas
    para usar uma factory, deve-se associar o retorno do função à uma variável
    Seu padrão de criação é o camelCase.
    Ex:
    carro = criarCarro()
*/

function criarAviao(tipo = 'Boing 747', velocidadeMaxima = 1327, capacidade = 410, combustivel = 226118){
    const aviao = {
        tipo: tipo,
        velocidadeMaxima: velocidadeMaxima,
        capacidade: capacidade,
        combustivel:combustivel,
        estado: 'Desligado',
        ligarAviao: function(){
            console.log('Ligando motores')
            this.estado = 'Ligado'
            console.log(`Seu avião está ${this.estado}`)
        }
    }
    return aviao
}

const meuAviao = criarAviao()
// console.log(meuAviao)
meuAviao.ligarAviao()
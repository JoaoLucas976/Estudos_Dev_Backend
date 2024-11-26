/*
    Um constructor é uma estrutura para criação de objetos com propriedades definidas em si
    Para instanciar um objeto com um constructor utiliza-se o conectivo new
    Ex:
    carro = new Carro()
*/

function Car(brand = 'BMW', color='Gray', power='617HP'){
    this.brand = brand,
    this.color = color,
    this.power = power,
    this.state = 'Desligado'
    this.speed = 0,
    this.startEngine = function(){
        console.log('Vrooom Vrooom')
        this.state = 'Ligado'
    }
    this.turnOff = function(){
        console.log('Click')
        this.state = 'Desligado'
    }
    this.accelerate = function(){
        if (this.state == 'Ligado' && this.speed < 190){
            this.speed += 10;
            console.log(`Velocidade Atual = ${this.speed} Km/h`)
        } else if (this.state == 'Ligado'){
            console.log('Velocidade Máxima Atingida')
            console.log(`Você está a ${this.speed} Km/h`)
        } else {
            console.log('Ligue o carro primeiro (startEngine())')
            console.log(`Seu carro está ${this.state}`)
        }
    }
    this.break = function(){
        this.speed = 0
    }
}

const myCar = new Car();
myCar.startEngine()
for (let i = 0; i < 10; i++){
    if (i == 5){
        myCar.turnOff()
    } else if (i == 7){
        myCar.startEngine()
    }
    myCar.accelerate()
}